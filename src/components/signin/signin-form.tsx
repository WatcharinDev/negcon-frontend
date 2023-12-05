'use client'
import { Button, Card, Checkbox, Form, Input } from 'antd'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
type Props = {
    onFinish: any
    onFinishFailed: any
}

const SigninForm: FunctionComponent<Props> = ({ onFinish, onFinishFailed }) => {
    return (
        <Card className='w-[500px] bg-gray-300 '>
            <h1 className='text-center text-[2rem]'>เข้าสู่ระบบ</h1>
            <Form
                className='w-full text-white'
                layout='vertical'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    className='w-full'
                    label="อีเมล"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
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

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>จดจำฉัน</Checkbox>
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