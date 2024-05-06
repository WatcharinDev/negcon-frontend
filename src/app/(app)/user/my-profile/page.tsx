import { NextPage } from 'next'
import React from 'react'
import { handleGetMyProfile } from './actions'
import ProfileForm from '@/components/user/profile/profile-form'

type Props = {}

const MyProfile:NextPage<Props> = async ({}) => {
    const response=await handleGetMyProfile()
  return (
    <div className='text-center'>
      <ProfileForm data={response?.data}></ProfileForm>
    </div>
  )
}

export default MyProfile