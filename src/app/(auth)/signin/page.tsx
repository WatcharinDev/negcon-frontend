import React from 'react'

import { onFinish, onFinishFailed } from './signin-action'
import Image from 'next/image'
import SigninForm from '@/components/signin/signin-form'
import { NextPage } from 'next'

type Props = {}

const SignPage:NextPage<Props> = (props: Props) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-950 w-full" >
            <SigninForm onFinish={onFinish} onFinishFailed={onFinishFailed}/>
        </div>
    )
}

export default SignPage