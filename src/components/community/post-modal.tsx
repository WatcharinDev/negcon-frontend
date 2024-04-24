import { handleAddPost } from '@/app/(app)/community/actions'
import { NotificationSuccess } from '@/helper/alert-modals'
import { App, Button, Form, Modal } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { FunctionComponent, useState } from 'react'

type Props = {
    open: boolean
    onClose: Function
}

const PostModal: FunctionComponent<Props> = ({ open, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const { notification } = App.useApp()
    const handleSubmit = () => {
        form.validateFields().then(async (values) => {
            const payload = {
                "id": 0,
                "content": values.content,
                "images": [
                    "string"
                ]
            }
            handleAddPost(payload).then((response) => {
                NotificationSuccess(notification, response.message)
            }).then(()=>{
                form.resetFields()
                handleClose()
            }).catch((error) => {
                console.log('error', error)
            })
        }).catch((errorInfo) => {

        });
    }
    const handleClose = () => {
        onClose(false)
    }
    return (
        <Modal
            title="Basic Modal"
            open={open}
            onOk={handleSubmit}
            onCancel={handleClose}
            centered
            footer={[
                <Button key="back" onClick={handleClose} size='small'>
                    Cancel
                </Button>,
                <Button
                    size='small'
                    key="submit"
                    type="primary"
                    loading={loading}
                    className='bg-sky-600'
                    onClick={handleSubmit}
                >
                    Post
                </Button>,
            ]}
        >
            <Form form={form}>
                <Form.Item name="content">
                    <TextArea rows={4} />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default PostModal