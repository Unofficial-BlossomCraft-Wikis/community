import { currentUser } from "@clerk/nextjs/server";
import { data } from "~/server/queries";
import { OwnerSide, userItemsColumns } from "~/components/user-item-table";
import { type userItems } from "~/lib/consts";

export default async function HomePage() {
  const user = await currentUser();
  if (!user) {
    return (
      <main className="mx-2 mb-2 h-full w-full scroll-auto rounded-lg bg-background p-2">
        <div className="prose">
          <h1>User not found.</h1>
        </div>
      </main>
    );
  }

  const userData = await data.get.getUser(user.id);
  if (!userData || userData === "user not found") {
    return (
      <main className="mx-2 mb-2 h-full w-full scroll-auto rounded-lg bg-background p-2">
        <div className="prose">
          <h1>User not found.</h1>
        </div>
      </main>
    );
  }

  const useritems = userData.items ?? [];
  const items: userItems[] = useritems.map((item: userItems) => item);

  return (
    <main className="mx-2 mb-2 h-full w-full scroll-auto rounded-lg bg-background p-2">
      <div className="prose">
        <h2>Your Items</h2>
        <OwnerSide columns={userItemsColumns} data={items} />
      </div>
    </main>
  );
}
