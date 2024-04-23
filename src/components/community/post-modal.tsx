import { Button, Form, Modal } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { FunctionComponent, useState } from 'react'

type Props = {
    open: boolean
    onClose: Function
}

const PostModal: FunctionComponent<Props> = ({ open, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const handleSubmit = () => {
        form.validateFields().then(async (values) => {
           console.log('value',values)
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