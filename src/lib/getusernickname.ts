import { StyledString } from "next/dist/build/swc";

const fetchGuildMember = async (accessToken: string) => {
  try {
    const response = await fetch(`https://discord.com/api/v10/users/@me/guilds/766373302721445888/member`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text(); // Fetch and log the response text for debugging
      console.error('Response status:', response.status);
      console.error('Response text:', errorText);
      throw new Error('Failed to fetch guild member');
    }

    const memberData = await response.json();
    return memberData;
  } catch (error) {
    console.error('Error fetching guild member:', error);
  }
};



export const getUserNickname = async (accessToken: string) => {
  try {
    const memberData = await fetchGuildMember(accessToken);

    // The nickname is in the 'nick' field
    const nickname = memberData.nick || 'No nickname';
    console.log('User Nickname:', nickname);

    return nickname;
  } catch (error) {
    console.error('Error fetching user nickname:', error);
  }
};

export const getUserId = async (accessToken: string) => {
  try {
    const response = await fetch('https://discord.com/api/v10/users/@me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text(); // Fetch and log the response text for debugging
      console.error('Response status:', response.status);
      console.error('Response text:', errorText);
      throw new Error('Failed to fetch user ID');
    }

    const userData = await response.json();
    return userData.id;
  } catch (error) {
    console.error('Error fetching user ID:', error);
  }
};
