import { authOptions } from '../../api/auth/authoptions';
import PostCard from '@/components/commons/card/post-card';
import { NextPage } from 'next'
import { getServerSession } from 'next-auth';
import React from 'react'

type Props = {}

const CommunityPage: NextPage<Props> = async ({ }) => {
    const session=await getServerSession(authOptions)

    /////aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    const data = Array.from({ length: 10 }, (_, index) => index);
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            {
                data && data.map((v, i) => (
                    <PostCard key={i}/>
                ))
            }

        </div>
    )
}

export default CommunityPage