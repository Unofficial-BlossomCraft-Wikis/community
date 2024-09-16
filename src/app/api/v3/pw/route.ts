import { eq, sql } from 'drizzle-orm';
import { PgSelect } from 'drizzle-orm/pg-core';
import { type NextRequest, NextResponse } from 'next/server';
import { db } from '~/server/db';
import { playerwarps } from '~/server/db/schema';

function withPagination<T extends PgSelect>(
  qb: T,
  page: number = 1,
  pageSize: number = 10,
) {
  return qb.limit(pageSize).offset((page - 1) * pageSize);
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const server = Number(searchParams.get('serverid')) || 1;
  const page = Number(searchParams.get('page')) || 1;

  // Build query
  const query = db
    .select()
    .from(playerwarps)
    .where(eq(sql`${sql`serverid`}`, server)).$dynamic();
  // Apply pagination
  const paginatedQuery = withPagination(query, page);

  // Execute query
  try {
    const result = await paginatedQuery.execute();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error executing query:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}