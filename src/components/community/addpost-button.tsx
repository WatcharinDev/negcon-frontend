'use client'
import { EditOutlined } from '@ant-design/icons'
import React, { FunctionComponent, useState } from 'react'
import PostModal from './post-modal'
import { handleAddPost } from '@/app/(app)/community/actions'
import { NotificationSuccess } from '@/helper/alert-modals'
import { App } from 'antd'
import { useRouter } from 'next/navigation'

type Props = {}

const AddpostButton: FunctionComponent<Props> = ({ }) => {
    const router=useRouter()
    const [open, setOpen] = useState<boolean>(false)
    const { notification } = App.useApp()
    const handleAddPosts = () => {
        setOpen(true)
    }
    const handleSubmit=(payload:any)=>{
        handleAddPost(payload).then((response) => {
            
            setOpen(false)
            
            NotificationSuccess(notification, response.message)
        }).catch((error) => {
            console.log('error', error)
        })
    }
    return (
        <React.Fragment>
            <div className="fixed right-6 bottom-16 w-16 h-16 shadow-md bg-gray-800 z-50 text-white text-4xl rounded-md flex items-center justify-center transition duration-300 ease-in-out hover:bg-gradient-to-br hover:bg-gray-400 hover:shadow-lg cursor-pointer" onClick={handleAddPosts}>
                <EditOutlined />
            </div>
            <PostModal open={open} onClose={(e:boolean)=>setOpen(e)} onSubmit={handleSubmit}/>
        </React.Fragment>

    )
}

export default AddpostButton