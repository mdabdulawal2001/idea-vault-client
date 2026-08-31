import RegisterSkeleton from '@/components/skeletons/RegisterSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div>
            <RegisterSkeleton />
        </div>
    );
};

export default loading;