import { currentUser } from "@clerk/nextjs/server";
import { getOAuthToken } from "~/lib/auth/discord";
import { getUserData } from "~/lib/getusernickname";
import Image from "next/image";
import { data } from "~/server/queries";
import BCUW from "../../public/bcuwTitleNormal.png";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { DiscordGuildMemberType } from "~/lib/consts";

export default async function HomePage() {
  const user = await currentUser();
  let userNickname: string | null | undefined = null;
  if (user) {
    const user_data = await data.get.getUser(user.id);
    if (user_data == "user not found" || user_data == undefined) {
      const token = await getOAuthToken();
      let memberData: DiscordGuildMemberType | null | undefined = null;
      if (token) {
        memberData = await getUserData(token);
        if (memberData == null || memberData == undefined) {
          userNickname = user.username;
        } else {
          userNickname =
            memberData.nick ??
            memberData.user?.username ??
            memberData.user?.global_name;
        }
      }
      if (memberData != null || memberData != undefined) {
        await data.post.user.create(user.id, memberData);
      }
    }
    if (
      user_data != null &&
      user_data != undefined &&
      user_data !== "user not found"
    ) {
      if (user_data?.discord_username) {
        userNickname = user_data?.discord_username;
      }
    }
  }
  const altie = await data.get.getUserByNickname("🌸 Altie122")!;
  return (
    <div className="h-[calc(100vh-4rem)]">
      <div className="h-[calc(100%-0.5rem)] w-[calc(100vw-1rem)]">
        <main className="mx-2 mb-2 h-full w-full overflow-scroll rounded-lg bg-background p-2">
          <div className="flex h-[50%] flex-col-reverse justify-center md:flex-row">
            <div className="prose flex flex-col items-center justify-center text-center md:basis-1/2">
              <h1>BCUW</h1>
              <p>
                BlossomCraft Unofficial Wiki
                <br />
                V4 Alpha
                <br />
                {altie && altie !== "user not found" && altie.uuid ? (
                  <>
                    Owned and maintained by{" "}
                    <Link href={`/user/${altie.uuid}`} className="mention">
                      @🌸 Altie122
                    </Link>
                  </>
                ) : (
                  <>
                    Owned and maintained by{" "}
                    <span className="mention">@🌸 Altie122</span>
                  </>
                )}
              </p>
            </div>
            <div className="flex items-center justify-center md:basis-1/2">
              <Image
                src={BCUW}
                alt="BCUW"
                className="h-auto w-1/2"
                style={{
                  filter: "drop-shadow(0 0 3rem hsla(306, 66%, 66%, 0.2))",
                }}
                width={400}
                height={400}
                unoptimized
              />
            </div>
          </div>
          <div className="text-center">
            {userNickname ? (
              <p>
                Welcome <span className="mention">@{userNickname}</span>!
              </p>
            ) : (
              <p className="flex flex-row items-center justify-center">
                Please sign in/up and/or join the&#32;
                <Link
                  href="https://discord.gg/blossomcraft"
                  className="prose-a row flex"
                >
                  official BlossomCraft Discord server{" "}
                  <ExternalLink width={16} />
                </Link>
                &#32;to use this site.
              </p>
            )}
          </div>
          <div className="prose">
            <h2>Whats coming in V4?</h2>
            <p>Here are some currently planned features:</p>
            <ul>
              <li>Completely redesigned and rewritten site</li>
              <li>Trading marketplace</li>
              <li>Advanced Player Warp Pages</li>
              <li>
                Complete wiki of the server including but not limited to: Items,
                Crates and Commands.
              </li>
              <li>
                Accounts for features such as Trading and the player warp
                registry (<b className="text-red-600">REMEMBER:</b> this is an
                unofficial site, this account is in no way connected to
                BlossomCraft and is not stored on blossomcraft run servers. If
                you are not comfortable with this, please <b>do not</b> make an
                account.)
              </li>
            </ul>
            <h2>What is the BCUW?</h2>
            <p>
              This wiki Was originally created to help make seeing all of the
              amazing Blossom Items easier, this includes:
            </p>
            <ul>
              <li>crates</li>
              <li>crate keys</li>
              <li>crate Blossom Items</li>
              <li>non-crate Blossom Items</li>
            </ul>
            <p>
              But the wiki has started being more of a general-purpose Wiki. and
              now it is gaining more features like a Player Warp Registry and a
              Trading Marketplace!
            </p>
            <h3>Have Questions, Feedback, Suggestions, or want to help?</h3>
            <p>Contact me in one of the following ways:</p>
            <ul>
              <li>
                Discord DM: <span className="mention">@Altie122</span>
              </li>
              <li>
                Email: <a href="mailto:bcuwdotxyz@pm.me">bcuwdotxyz@pm.me</a>
              </li>
              <li>
                or Altie122 on most social media platforms, altie133 if on
                reddit
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
