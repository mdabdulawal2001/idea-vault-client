import AddIdeaForm from '@/components/ideas/AddIdeaForm';
import { requireAuth } from '@/lib/requireAuth';
import React from 'react';

export const metadata = {
  title: "Add Idea",
  description:
    "Share your innovative startup idea with the IdeaVault community.",
};

const AddIdeaPage = async () => {
    const session = await requireAuth("/add-idea");
    return (
        <div>
            <AddIdeaForm />
        </div>
    );
};

export default AddIdeaPage;