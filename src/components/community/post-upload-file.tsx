import React, { Dispatch, FunctionComponent, SetStateAction, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import { handleUploadPostImage } from '@/helper/utility-actions';
import { RcFile, UploadChangeParam } from 'antd/lib/upload/interface';
type Props = {
    fileList:UploadFile[],
    setFileList:Dispatch<SetStateAction<UploadFile[]>>
  }

const getBase64 = (file: any): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const PostUploadFile: FunctionComponent<Props>= ({fileList,setFileList}) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as any);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const handleImageChange: UploadProps['onChange'] = async ({ fileList: newFileList }) => {
        if (newFileList[newFileList.length - 1]?.originFileObj) {
            const formData = new FormData();
            formData.append('file', newFileList[newFileList.length - 1].originFileObj as RcFile)
            handleUploadPostImage(formData).then((response: any) => {
                setFileList([...fileList, {
                    uid: new Date().toString(),
                    name: newFileList[newFileList.length - 1].originFileObj?.name || "",
                    status: 'done',
                    url: response.url,
                }])
            }).catch((error: any) => {
                console.log(error)
            })

        }

    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            <PlusOutlined />
            <div className='mt-2'>Upload</div>
        </button>
    );
    const handleBeforeUpload = (file: UploadFile) => {
        return false;
    }
    const handleDeleteFile=(file:UploadFile) => {
        setFileList(provious => provious.filter((i) => i.url !== file.url))
      }
    return (
        <>
            <Upload
                beforeUpload={handleBeforeUpload}
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleImageChange}
                onRemove={handleDeleteFile}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            {previewImage && (
                <Image
                    wrapperStyle={{ display: 'none' }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                    alt={previewImage}
                />
            )}
        </>
    );
};

export default PostUploadFile;