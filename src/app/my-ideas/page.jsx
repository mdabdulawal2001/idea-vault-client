
import MyIdeaGrid from "@/components/ideas/MyIdeaGrid";
import React from "react";
import { auth } from "@/lib/auth";
import { getAllIdeas } from "@/services/ideaService";
import { headers } from "next/headers";
import toast from "react-hot-toast";

const MyIdeasPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });


  const user = session?.user;
  if (!user) {
    return <div>Please Login First!</div>
  }

  const ideas = await getAllIdeas({
  authorId: user.id,
});
  return (
    <div className="max-w-350 mx-auto my-10 md:my-14">
      <MyIdeaGrid ideas={ideas} />
    </div>
  );
};

export default MyIdeasPage;
