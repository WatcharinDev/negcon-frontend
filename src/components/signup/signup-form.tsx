'use client'
import { filterOption } from '@/helper/filter-option'
import { Button, Card, Checkbox, DatePicker, Form, Input, Select } from 'antd'
import Link from 'next/link'
import React from 'react'

type Props = {
  onFinish: any
  onFinishFailed: any
}

const SignupForm: React.FC<Props> = ({ onFinish, onFinishFailed }) => {
  return (
    <Card className='w-[800px] bg-gray-300 '>
      <h1 className='text-center text-[2rem]'>สมัครสมาชิก</h1>
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
        <div className='grid grid-cols-2 gap-4'>
          <Form.Item
            className='w-full'
            label="รหัสผ่าน"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            className='w-full'
            label="ยืนยันรหัสผ่าน"
            name="confirm_password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <Form.Item
            className='w-full'
            label="ชื่อ"
            name="first_name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className='w-full'
            label="นามสกุล"
            name="last_name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <Form.Item
            className='w-full'
            label="วันเกิด"
            name="birthday"
          >
            <DatePicker className='w-full' />
          </Form.Item>
          <Form.Item className='w-full' label="เบอร์โทรศัพท์" name="tel">
            <Input />
          </Form.Item>
        </div>
        <Form.Item
          label="ประเภทบัญชี"
          name="type"
          className='w-full'
        >
          <Select
            filterOption={filterOption}
          >
            <Select.Option value="demo" key={`cutomer`}>ผู้ใช้</Select.Option>
            <Select.Option value="demo" key={`fixer`}>ช่าง</Select.Option>
          </Select>
        </Form.Item>


        <Form.Item name="เกี่ยวกับตัวเอง" label="Introduction">
          <Input.TextArea />
        </Form.Item>

        <Form.Item className='w-full'>
          <div className='grid grid-cols-2 gap-4'>
            <Link href={`/signin`}>
              <Button className='w-full bg-gray-400 text-white' htmlType="button">
                เข้าสู่ระบบ
              </Button>
            </Link>
            <Button className='w-full bg-blue-900 text-white' htmlType="submit">
              สมัครสมาชิก
            </Button>

          </div>


        </Form.Item>
      </Form>
    </Card>
  )
}

export default SignupForm