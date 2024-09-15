import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth, clerkClient } from "@clerk/nextjs/server";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton } from "@clerk/nextjs";
import { data } from "~/server/queries";

export default async function UserButton() {
  const { userId } = auth();
  if (!userId) {
    return (
      <div>
        <Link href="/sign-in">Sign in</Link>
      </div>
    );
  }
  const user = await clerkClient().users.getUser(userId);
  const userData = await data.get.getUser(user.id);
  if (userData == null || userData == undefined || userData == "user not found") {
    return (
      <div>
        <Link href="/sign-in">Sign in</Link>
      </div>
    );
  }
  return (
    <div className="flex flex-row items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={user.imageUrl} />
            <AvatarFallback>
              {user.username
                ? user.username.charAt(0) +
                  user.username.charAt(1) +
                  user.username.charAt(2)
                : ""}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>hi {user.username}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href={`/user/${userData.uuid}`}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/user/settings">Settings</Link>
          </DropdownMenuItem>
          <SignOutButton>
            <DropdownMenuItem>Sign Out</DropdownMenuItem>
          </SignOutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
