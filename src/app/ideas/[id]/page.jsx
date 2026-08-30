import { getIdeaById } from "@/services/ideaService";
import { requireAuth } from "@/lib/requireAuth";
import IdeaDetails from "@/components/ideas/IdeaDetails";

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const idea = await getIdeaById(id);

    return {
      title: `${idea.title} | IdeaDetails`,
      description: idea.shortDescription,
    };
  } catch {
    return {
      title: "IdeaVault | Idea Details",
      description: "Explore detailed information about this startup idea.",
    };
  }
}

const IdeaDetailsPage = async ({ params }) => {
  const { id } = await params;
  const session = await requireAuth(`/ideas/${id}`) ;
  const idea = await getIdeaById(id);

  return <IdeaDetails idea={idea} />;
};

export default IdeaDetailsPage;
