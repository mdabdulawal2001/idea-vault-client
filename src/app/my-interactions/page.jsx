import MyInteractions from '@/components/ideas/MyInteractions';
import React from 'react';

export const metadata = {
  title: "My Interactions | IdeaVault",
  description:
    "View and manage your comments and interactions on IdeaVault ideas.",
};

const MyInteractionsPage = () => {
    return (
        <div>
            <MyInteractions />
        </div>
    );
};

export default MyInteractionsPage;