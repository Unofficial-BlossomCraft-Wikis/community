import type { DiscordGuildMemberType } from "~/lib/consts";

const fetchGuildMember = async (accessToken: string) => {
  try {
    const response = await fetch(
      `https://discord.com/api/v10/users/@me/guilds/766373302721445888/member`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (!response.ok) {
      const errorText = await response.text(); // Fetch and log the response text for debugging
      console.error("Response status:", response.status);
      console.error("Response text:", errorText);
      throw new Error("Failed to fetch guild member");
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const memberData: DiscordGuildMemberType = await response.json();
    return memberData;
  } catch (error) {
    console.error("Error fetching guild member:", error);
  }
};

export const getUserNickname = async (accessToken: string) => {
  try {
    const memberData = await fetchGuildMember(accessToken);
    if (!memberData) {
      return null;
    }
    const nickname = memberData.nick ?? memberData.user?.username ?? memberData.user?.global_name;

    return nickname;
  } catch (error) {
    console.error("Error fetching user nickname:", error);
  }
};

export const getUserData = async (accessToken: string) => {
  try {
    const memberData = await fetchGuildMember(accessToken);
    if (!memberData) {
      return null;
    }

    return memberData;
  } catch (error) {
    console.error("Error fetching user nickname:", error);
  }
};

// export const getUserId = async (accessToken: string) => {
//   try {
//     const response = await fetch("https://discord.com/api/v10/users/@me", {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });

//     if (!response.ok) {
//       const errorText = await response.text(); // Fetch and log the response text for debugging
//       console.error("Response status:", response.status);
//       console.error("Response text:", errorText);
//       throw new Error("Failed to fetch user ID");
//     }

//     const userData = await response.json();
//     return userData.id;
//   } catch (error) {
//     console.error("Error fetching user ID:", error);
//   }
// };
