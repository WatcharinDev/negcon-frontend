'use client'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Collapse, Image as ImageAntd, Typography } from 'antd'
import React, { FunctionComponent, useEffect, useState } from 'react'
import Image from 'next/image';
import { community_list } from '@/models/community';
const { Meta } = Card;
type Props = {
  data: community_list
}

const PostCard: FunctionComponent<Props> = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [postImages, setPostImages] = useState<string[]>([])
  const longText = data.posts_content;
  const maxCharacters = 300;
  const short = longText.substring(0, maxCharacters)
  useEffect(() => {
    if (data) {
      setPostImages(JSON.parse(data.posts_images))
    }
  }, [data])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const renderTextWithLineBreaks = (text: string) => {
    const paragraphs = text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));

    return paragraphs;
  };
  return (
    <Card
      className='w-[800px]'
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src={data.posts_profile_img} size={50} />}
        title={data.posts_user_name}
        description={data.posts_update_at}
      />
      <p className='mt-4'>
        {isExpanded ? renderTextWithLineBreaks(longText) : renderTextWithLineBreaks(short)}
        {!isExpanded && (
          <span className="text-blue-500 cursor-pointer" onClick={toggleExpand}>
            ดูเพิ่มเติม
          </span>
        )}
      </p>
      <div className='h-[500px] overflow-y-hidden mt-4'>
        <ImageAntd
          preview={{ visible: false }}
          className='w-full'
          src={postImages.length > 0 ? postImages[0] : ""}
          onClick={() => setVisible(true)}
        />
      </div>

      <div className='hidden'>
        <ImageAntd.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
          {
            postImages?.length > 0 && postImages.map((v:string, i:number) => (
              <ImageAntd src={v} alt={v} key={i}/>
            ))
          }


        </ImageAntd.PreviewGroup>
      </div>
    </Card>
  )
}

export default PostCard