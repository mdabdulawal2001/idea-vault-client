import ProfileCard from '@/components/profile/ProfileCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const ProfilePage = async () => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
    const user = session?.user;
    return (
        <div>
            <ProfileCard user={user} />
        </div>
    );
};

export default ProfilePage;