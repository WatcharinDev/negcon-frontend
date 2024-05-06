import SignupForm from '@/components/signup/signup-form'
import { handleGetAllRoleUser } from '@/helper/utility-actions'
import { NextPage } from 'next'
import React from 'react'

type Props = {}

const SignUpPage: NextPage<Props> = async (props: Props) => {
    const response_roles = await handleGetAllRoleUser()
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-950 w-full" >
            <SignupForm roles={response_roles?.data || []}></SignupForm>
        </div>
    )
}

export default SignUpPage