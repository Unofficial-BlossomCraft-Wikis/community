import { redirect } from "next/navigation";
import { data } from "~/server/queries";

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const isRedirect = searchParams.has("redirect", "true");
  // const randomItem = await data.get.random.item();
  // const response = new Response(JSON.stringify({ randomItem }), {
  //   status: 200,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // if (isRedirect) {
  //   redirect(randomItem.path);
  // }
  // return response;
  return void null
}