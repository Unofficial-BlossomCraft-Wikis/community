import { auth, clerkClient } from "@clerk/nextjs/server";

export async function getOAuthToken() {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  // Define the provider
  const provider = "oauth_discord";

  // Get the OAuth access token for the user
  const clerkResponse = await clerkClient().users.getUserOauthAccessToken(
    userId,
    provider,
  );

  // Assuming there's at least one access token in the response
  if (clerkResponse.totalCount > 0) {
    const accessToken = clerkResponse.data[0]!.token; // Access the first token's value
    console.log("Access token:", accessToken);
    return accessToken;
  } else {
    console.log("No access token found for the specified provider.");
    return null;
  }
}
