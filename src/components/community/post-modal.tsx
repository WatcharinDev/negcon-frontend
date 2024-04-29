import { handleAddPost } from '@/app/(app)/community/actions'
import { NotificationSuccess } from '@/helper/alert-modals'
import { App, Button, Form, Modal, UploadFile } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { FunctionComponent, useState } from 'react'
import PostUploadFile from './post-upload-file'
import { useSession } from 'next-auth/react'
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'

type Props = {
    open: boolean
    onClose: Function
    onSubmit:Function
}

const PostModal: FunctionComponent<Props> = ({ open, onClose ,onSubmit}) => {
    const { data: session } = useSession()
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([])
    const router=useRouter()
    const { notification } = App.useApp()
    const handleSubmit = () => {
        form.validateFields().then(async (values) => {
            const payload = {
                "id": 0,
                "user_name": session?.user.first_name + " " + session?.user.last_name,
                "profile_img": session?.user.profile_img,
                "content": values.content,
                "images": fileList.map((v) => { return v.url })
            }
            form.resetFields()
            setFileList([])
            onSubmit(payload)
        }).catch((errorInfo) => {

        });
    }
    const handleClose = () => {
        onClose(false)
    }
    return (
        <Modal
            title="โพสต์"
            open={open}
            onOk={handleSubmit}
            width={800}
            onCancel={handleClose}
            centered
            footer={[
                <Button key="back" onClick={handleClose} >
                    ยกเลิก
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    loading={loading}
                    className='bg-sky-600'
                    onClick={handleSubmit}
                >
                    โพสต์
                </Button>,
            ]}
        >
            <Form form={form}>
                <Form.Item name="content">
                    <TextArea rows={4} />
                </Form.Item>
            </Form>
            <PostUploadFile fileList={fileList} setFileList={setFileList} />
        </Modal>
    )
}

export default PostModal