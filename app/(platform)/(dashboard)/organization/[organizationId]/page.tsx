import { OrganizationSwitcher, auth } from "@clerk/nextjs";
import { create } from "@/actions/createBoard";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();
  return (
    <div className="flex flex-col space-y-4 ">
      <form action={create}>
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-1"
        />
        <Button type="submit" className="bg-black text-white p-2">
          Create board
        </Button>
      </form>
      <div className="space-y-2">
        {boards.map((board) => (
          <div key={board.id}>Board Name: {board.title}</div>
        ))}
      </div>
    </div>
  );
  revalidatePath("/organization/org_2cmtImhHXbw0LldPl3Eu1gRV5Il");
};

export default OrganizationIdPage;
