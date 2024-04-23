'use client'
import { EditOutlined } from '@ant-design/icons'
import React, { FunctionComponent, useState } from 'react'
import PostModal from './post-modal'

type Props = {}

const AddpostButton: FunctionComponent<Props> = ({ }) => {
    const [open, setOpen] = useState<boolean>(false)
    const handleAddPost = () => {
        setOpen(true)
    }
    return (
        <React.Fragment>
            <div className="fixed right-6 bottom-16 w-16 h-16 shadow-md bg-gray-800 z-50 text-white text-4xl rounded-md flex items-center justify-center transition duration-300 ease-in-out hover:bg-gradient-to-br hover:bg-gray-400 hover:shadow-lg cursor-pointer" onClick={handleAddPost}>
                <EditOutlined />
            </div>
            <PostModal open={open} onClose={(e:boolean)=>setOpen(e)}/>
        </React.Fragment>

    )
}

export default AddpostButton