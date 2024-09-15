"use client"

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { type playerWarpType } from "~/lib/consts"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { deletePW } from "~/app/user/settings/my/pws/actions"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip"

export const userPWColumns: ColumnDef<playerWarpType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "command_name",
    header: "Command",
    cell: ({ row }) => {
      const pw = row.original
      return (
        <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
          <Button variant="link" onClick={() => navigator.clipboard.writeText(`/pw ${pw.command_name}`) } >/pw {pw.command_name}</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      )
    }
  },
  {
    accessorKey: "serverid",
    header: "Server",
    cell: ({ row }) => {
      const pw = row.original
      const server = pw.serverid == 1 ? "cherry" : pw.serverid == 2 ? "spirit" : pw.serverid == 3 ? "lotus" : pw.serverid == 4 ? "tulip" : "unknown"
      return server
    }
  },
  // {
  //   accessorKey: "items",
  //   header: "Items for sale",
  //   cell: ({ row }) => {
  //     const pw = row.original
  //     const items = pw.items.map((item) => item);
  //     const itemsnum = items.length
  //     return itemsnum
  //   }
  // }
]

export const userPWColumnsOwnerSide: ColumnDef<playerWarpType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "command_name",
    header: "Command",
    cell: ({ row }) => {
      const pw = row.original
      return (
        <Button variant="link" onClick={() => navigator.clipboard.writeText(`/pw ${pw.command_name}`) } >/pw {pw.command_name}</Button>
      )
    }
  },
  {
    accessorKey: "serverid",
    header: "Server",
    cell: ({ row }) => {
      const pw = row.original
      const server = pw.serverid == 1 ? "cherry" : pw.serverid == 2 ? "spirit" : pw.serverid == 3 ? "lotus" : pw.serverid == 4 ? "tulip" : "unknown"
      return server
    }
  },
  // {
  //   accessorKey: "items",
  //   header: "Items for sale",
  //   cell: ({ row }) => {
  //     const pw = row.original
  //     if (pw.items == null) {
  //       return "None"
  //     }
  //     const items = pw.items.map((item) => item);
  //     const itemsnum = items.length
  //     return itemsnum
  //   }
  // },
  {
    id: "actions",
    cell: ({ row }) => {
      const pw = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => deletePW(pw.id)}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function PWTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
