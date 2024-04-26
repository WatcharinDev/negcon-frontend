import React, { Dispatch, FunctionComponent, SetStateAction, useState } from 'react';
import { Upload ,Image} from 'antd';
import type { UploadFile, UploadProps,  } from 'antd';
import ImgCrop from 'antd-img-crop';
import { RcFile, UploadChangeParam } from 'antd/lib/upload/interface';
import { handleUploadPostImage } from '@/helper/utility-actions';
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
const ProfileUploadImage: FunctionComponent<Props> = ({fileList,setFileList}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as any);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };
  const props: UploadProps = {
    onRemove: (file) => {
      setFileList(provious => provious.filter((i) => i.url !== file.url))
    },
    beforeUpload: async (file:UploadFile) => {
      const formData = new FormData();
      formData.append('file', file as RcFile)
      handleUploadPostImage(formData).then((response: any) => {
        setFileList([...fileList, {
          uid: new Date().toString(),
          name: file.originFileObj?.name || "",
          status: 'done',
          url: response.url,
        }])
      }).catch((error: any) => {
        console.log(error)
      })

      return false;
    },
    fileList,
    listType: "picture-circle",

  };
  return (
    <React.Fragment>
      <ImgCrop rotationSlider aspectSlider modalTitle='แก้ไขรูปภาพ' modalOk='บันทึก' modalCancel='ยกเลิก'>
        <Upload
          {...props}
          onPreview={handlePreview}
        >
          {fileList.length < 1 && '+ Upload'}
        </Upload>

      </ImgCrop>
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
    </React.Fragment>

  );
};

export default ProfileUploadImage;