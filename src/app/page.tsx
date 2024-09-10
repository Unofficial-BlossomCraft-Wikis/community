import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { getOAuthToken } from "~/lib/auth/discord";
import { getUserId, getUserNickname } from "~/lib/getusernickname";

export default async function HomePage() {
  const user = await currentUser();
  let userNickname: string | null | undefined = null;
  if (user) {
    const token = await getOAuthToken();
    console.log(token);
    if (token) {
      userNickname = await getUserNickname(token);
    }
  }
  return (
    <div className="h-[calc(100vh-4rem)]">
      <div className="h-[calc(100%-0.5rem)] w-[calc(100vw-1rem)]">
        <main className="mx-2 mb-2 h-full w-full overflow-scroll rounded-lg bg-background p-2">
          <div className="flex h-[50%] justify-center md:flex-row">
            <div className="prose flex flex-col items-center justify-center text-center md:basis-1/2">
              <h1>BCUW</h1>
              <p>
                BlossomCraft Unofficial Wiki
                <br />
                V4 Alpha
              </p>
            </div>
            <div className="flex items-center justify-center md:basis-1/2">
              <img
                src="/bcuwTitleNormal.png"
                alt="BCUW"
                className="h-auto w-1/2"
                style={{
                  filter: "drop-shadow(0 0 3rem hsla(306, 66%, 66%, 0.2))",
                }}
              />
            </div>
          </div>
          <div className="text-center">
            {userNickname ? (
              <p>Your Blossomcraft discord server nickname is {userNickname}</p>
            ) : (
              <p>You are not in the Blossomcraft discord server</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
