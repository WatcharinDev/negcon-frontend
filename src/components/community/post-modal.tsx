import { Modal } from 'antd'
import React, { FunctionComponent } from 'react'

type Props = {
    open: boolean
    onClose: Function
}

const PostModal: FunctionComponent<Props> = ({ open, onClose }) => {
    const handleSubmit = () => {

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
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default PostModal