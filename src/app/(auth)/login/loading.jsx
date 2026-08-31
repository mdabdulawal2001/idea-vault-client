import LoginSkeleton from '@/components/skeletons/LoginSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div>
            <LoginSkeleton />
        </div>
    );
};

export default loading;