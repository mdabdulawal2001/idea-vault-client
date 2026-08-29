import MyInteractions from '@/components/ideas/MyInteractions';
import { requireAuth } from '@/lib/requireAuth';
import React from 'react';

export const metadata = {
  title: "My Interactions",
  description:
    "View and manage your comments and interactions on IdeaVault ideas.",
};

const MyInteractionsPage = async () => {
    const session = await requireAuth("/my-interactions");
    return (
        <div>
            <MyInteractions />
        </div>
    );
};

export default MyInteractionsPage;