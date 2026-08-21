import { getIdeaById } from "@/services/ideaService";
import IdeaDetails from "@/components/Ideas/IdeaDetails";

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const idea = await getIdeaById(id);

    return {
      title: `${idea.title} | IdeaVault`,
      description: idea.shortDescription,
    };
  } catch {
    return {
      title: "Idea Details | IdeaVault",
    };
  }
}

const IdeaDetailsPage = async ({ params }) => {
  const { id } = await params;

  const idea = await getIdeaById(id);

  return <IdeaDetails idea={idea} />;
};

export default IdeaDetailsPage;