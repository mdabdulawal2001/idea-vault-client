import MyIdeaGrid from "@/components/ideas/MyIdeaGrid";
import React from "react";
import { auth } from "@/lib/auth";
import { getMyIdeas } from "@/services/ideaService";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { requireAuth } from "@/lib/requireAuth";

export const metadata = {
  title: "My Ideas",
  description:
    "Manage the startup ideas you have shared with the IdeaVault community.",
};

const MyIdeasPage = async () => {

  const session = await requireAuth("/my-ideas");

  const ideas = await getMyIdeas();
  return (
      <div className="max-w-300 mx-auto my-10 md:my-14">
        <MyIdeaGrid ideas={ideas} />
      </div>
  );
};

export default MyIdeasPage;
