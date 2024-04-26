'use client'
import { Button, Card, Checkbox, Form, Input } from 'antd'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
type Props = {
    onFinish: any
    onFinishFailed: any
}

const SigninForm: FunctionComponent<Props> = ({ onFinish, onFinishFailed }) => {
    const handleSignIn = (data: any) => {
        onFinish(JSON.parse(JSON.stringify(data))).then(async (result: any) => {
            console.log('aaaaa',result)
            await signIn("credentials", {
                access_token: result.data.access_token,
                id: result.data.id,
                email: result.data.email,
                code:result.data.code,
                profile_img:result.data.profile_img,
                first_name:result.data.first_name,
                last_name:result.data.last_name,
                role_code:result.data.role_code,
                role_id:result.data.role_id,
            });
        }).catch((err: any) => {

        });
    }
    return (
        <Card className='w-[500px] bg-gray-300 '>
            <h1 className='text-center text-[2rem]'>เข้าสู่ระบบ</h1>
            <Form
                className='w-full text-white'
                layout='vertical'
                initialValues={{ remember: true }}
                onFinish={handleSignIn}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    className='w-full'
                    label="อีเมล"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    className='w-full'
                    label="รหัสผ่าน"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item className='w-full'>
                    <Button className='w-full bg-blue-900 text-white ' htmlType="submit">
                        เข้าสู่ระบบ
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Link href={`signup`}>
                        <Button className='w-full bg-gray-400 text-white' htmlType="button">
                            สมัครสมาชิก
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        </Card>


    )
}

export default SigninForm