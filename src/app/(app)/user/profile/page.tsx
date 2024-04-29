import ProfileForm from '@/components/user/profile/profile-form'
import { response_data } from '@/models/response'
import { NextPage } from 'next'
import React from 'react'
import { handleGetProfile } from './actions'
import { user } from '@/models/user'

type Props = {}

const ProfilePage: NextPage<Props> = async ({ }) => {
  // const response = await handleGetProfile()
  const data: any = null
  return (
    <div className='text-center'>
      <ProfileForm data={data}></ProfileForm>
    </div>
  )
}

export default ProfilePage