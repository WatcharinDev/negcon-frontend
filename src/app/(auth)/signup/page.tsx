import SignupForm from '@/components/signup/signup-form'
import { NextPage } from 'next'
import React from 'react'

type Props = {}

const SignUpPage: NextPage<Props> = (props: Props) => {
    return (
         <div className="min-h-screen flex items-center justify-center bg-blue-950 w-full" >
            <SignupForm ></SignupForm>
        </div>
    )
}

export default SignUpPage