'use client'
import ProfileUploadImage from '@/components/commons/uploads/profile-upload-image'
import { filterOption } from '@/helper/filter-option'
import { user } from '@/models/user'
import { EditOutlined } from '@ant-design/icons'
import { Button, Card, DatePicker, Form, Input, Select, UploadFile } from 'antd'
import moment from 'moment'
import React, { FunctionComponent, useEffect, useState } from 'react'

type Props = {
  data: user
}

const ProfileForm: FunctionComponent<Props> = ({ data }) => {
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [disabled, setDisabled] = useState(true)
  useEffect(() => {
    if (data) {
      setFileList([{
        uid: new Date().toString(),
        name: data.first_name,
        url: data.profile_img,
        status: "done"
      }])
      form.setFieldsValue({ ...data ,birthday:moment(data.birthday)})
    }
  }, [data,form])

  const handleEditProfile = () => {
    setDisabled(!disabled)
  }
  return (
    <Card className='w-full bg-[rgb(0 0 0 / 4%)] '>


      <Form form={form} layout='vertical' disabled={disabled}>
        <div className='grid grid-cols-2'>
          <div className='flex align-middle gap-4 justify-start'>
            <div >
              <ProfileUploadImage fileList={fileList} setFileList={setFileList} />
            </div>

            <div className='flex flex-col justify-center align-middle'>
              <div>
                <Form.Item
                  className='w-full'
                  name="email"
                  rules={[{ required: true, message: 'Please input your email!' }]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <Form.Item
                  className='w-full'
                  name="first_name"
                  rules={[{ required: true, message: 'Please input your email!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  className='w-full'
                  name="last_name"
                  rules={[{ required: true, message: 'Please input your email!' }]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>

          </div>
          <div className='text-right'>
            <EditOutlined className='text-[30px] cursor-pointer text-blue-600' onClick={handleEditProfile} />
          </div>
        </div>

        <Form.Item name="introduction" label="เกี่ยวกับตัวเอง">
          <Input.TextArea />
        </Form.Item>
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
        {/* <div className='grid grid-cols-2 gap-4'>
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
        </div> */}



        <Form.Item className='w-full'>
          <div className='grid grid-cols-2 gap-4'>
            <Button className='w-full bg-gray-400 text-white' htmlType="button" onClick={()=>setDisabled(!disabled)}>
              ยกเลิก
            </Button>
            <Button className='w-full bg-blue-900 text-white' htmlType="submit">
              บันทึก
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default ProfileForm