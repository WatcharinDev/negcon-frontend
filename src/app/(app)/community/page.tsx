import PostCard from '@/components/commons/card/post-card';
import { NextPage } from 'next'
import React from 'react'

type Props = {}

const CommunityPage: NextPage<Props> = ({ }) => {
    const data = Array.from({ length: 10 }, (_, index) => index);
    console.log(data)
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