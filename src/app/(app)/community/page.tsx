import { authOptions } from '../../api/auth/authoptions';
import PostCard from '@/components/commons/card/post-card';
import { NextPage } from 'next'
import { getServerSession } from 'next-auth';
import React from 'react'
import { handleGetAllPost } from './actions';
import { community_list, response_data_community_list } from '@/models/community';
import { revalidatePath } from 'next/cache';
import axios from 'axios';
import AddpostButton from '@/components/community/addpost-button';

type Props = {}

const CommunityPage: NextPage<Props> = async ({ }) => {
    const session = await getServerSession(authOptions)
    const response: response_data_community_list = await handleGetAllPost({ page: 1, size: 100 })
    console.log('7777777777777777777777777777', response.data[0])
    const data: community_list[] = response?.data as community_list[]
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            {
                data && data.map((v, i) => (
                    <PostCard key={i} data={v} />
                ))
            }
            <AddpostButton />
        </div>
    )
}

export default CommunityPage