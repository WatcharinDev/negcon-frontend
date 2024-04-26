'use client'
import { filterOption } from '@/helper/filter-option'
import { App, Button, Card, Checkbox, DatePicker, Form, Input, Select, UploadFile } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import ProfileUploadImage from '../commons/uploads/profile-upload-image'
import { handleSubmit } from '@/app/(auth)/signup/signup-action'
import { NotificationSuccess } from '@/helper/alert-modals'

type Props = {}

const SignupForm: React.FC<Props> = ({ }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const { notification } = App.useApp()
  const onFinish = (values: any) => {
    const payload = {
      ...values,
      role_code:"SADM",
      profile_img: fileList[0]?.url || ""
    }
    handleSubmit(payload).then((response: any) => {
      NotificationSuccess(notification,"")
    }).catch((err: any) => {
      console.log(err)
    });
  }
  const handleOnFinishFailed = (value: any) => {
    console.log('handleOnFinishFailed', value)
  }
  return (
    <Card className='w-[800px] bg-gray-300 '>
      <h1 className='text-center text-[2rem]'>สมัครสมาชิก</h1>
      <div className='text-center mt-4'>
        <ProfileUploadImage fileList={fileList} setFileList={setFileList} />
      </div>
      <Form
        className='w-full text-white'
        layout='vertical'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={handleOnFinishFailed}
      >
        <Form.Item
          className='w-full'
          label="บัญชีผู้ใช้งาน"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
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
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className='w-full'
            label="นามสกุล"
            name="last_name"
            rules={[{ required: true, message: 'Please input your email!' }]}
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
          name="role_id"
          className='w-full'
        >
          <Select
            filterOption={filterOption}
          >
            <Select.Option value="2" key={`cutomer`}>ผู้ใช้</Select.Option>
            <Select.Option value="3" key={`fixer`}>ช่าง</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="introduction" label="เกี่ยวกับตัวเอง">
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