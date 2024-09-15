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
          <Link href="/user/settings">
          <DropdownMenuItem>Settings</DropdownMenuItem>
          </Link>
          <SignOutButton>
            <DropdownMenuItem>Sign Out</DropdownMenuItem>
          </SignOutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
