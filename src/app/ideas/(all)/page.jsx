import IdeasAllCards from "@/components/Ideas/IdeasAllCards";

export const metadata = {
  title: "Explore Ideas",
  description:
    "Discover innovative startup ideas shared by the IdeaVault community.",
};

const IdeasPage = () => {
  return (
    <main>
      <IdeasAllCards />
    </main>
  );
};

export default IdeasPage;