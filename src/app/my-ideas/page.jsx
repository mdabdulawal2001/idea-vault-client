
import MyIdeaGrid from "@/components/ideas/MyIdeaGrid";
import React from "react";
import { auth } from "@/lib/auth";
import { getMyIdeas } from "@/services/ideaService";
import { headers } from "next/headers";


export const metadata = {
  title: "My Ideas | IdeaVault",
  description:
    "Manage the startup ideas you have shared with the IdeaVault community.",
};

const MyIdeasPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });


  const user = session?.user;
  if (!user) {
    return <div>Please Login First!</div>
  }

  const ideas = await getMyIdeas();
  return (
    <div className="max-w-350 mx-auto my-10 md:my-14">
      <MyIdeaGrid ideas={ideas} />
    </div>
  );
};

export default MyIdeasPage;
