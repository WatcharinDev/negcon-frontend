import { authOptions } from '../../api/auth/authoptions';
import PostCard from '@/components/commons/card/post-card';
import { NextPage } from 'next'
import { getServerSession } from 'next-auth';
import React from 'react'
import { handleGetAllPost } from './actions';
import { community_list, response_data_community_list } from '@/models/community';

type Props = {}

const CommunityPage: NextPage<Props> = async ({ }) => {
    const session = await getServerSession(authOptions)
    const response: response_data_community_list = await handleGetAllPost({ page: 1, size: 10 })
    const data:community_list[]=response.data as community_list[]
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            {
                data && data.map((v, i) => (
                    <PostCard key={i} data={v}/>
                ))
            }

        </div>
    )
}

export default CommunityPage