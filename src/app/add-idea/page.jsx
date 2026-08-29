import AddIdeaForm from '@/components/ideas/AddIdeaForm';
import React from 'react';

export const metadata = {
  title: "Add Idea | IdeaVault",
  description:
    "Share your innovative startup idea with the IdeaVault community.",
};

const AddIdeaPage = () => {
    return (
        <div>
            <AddIdeaForm />
        </div>
    );
};

export default AddIdeaPage;