import { redirect } from "next/navigation";
import { data } from "~/server/queries";

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const isRedirect = searchParams.has("redirect", "true");
  // const randomCrate = await data.get.random.crate();
  // const response = new Response(JSON.stringify({ randomCrate }), {
  //   status: 200,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // if (isRedirect) {
  //   redirect(randomCrate.path);
  // }
  // return response;
  return void null
}