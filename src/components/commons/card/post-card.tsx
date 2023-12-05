'use client'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Collapse, Image as ImageAntd, Typography } from 'antd'
import React, { FunctionComponent, useEffect, useState } from 'react'
import Image from 'next/image';
const { Meta } = Card;
type Props = {}

const PostCard: FunctionComponent<Props> = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const longText = "If you are using a specific programming \n language or framework, there might be libraries or functions available to generate Lorem Ipsum text programmatically. Let me know if you have a specific environment in mind, and I can provide more targeted instructions.In this example:The Collapse component is used to create a collapsible container.The Panel component represents the collapsible section within the Collapse component.The isExpanded state is used to determine whether to show the link or not.The useEffect hook is used to calculate the number of lines in the paragraph and set the isExpanded state accordingly.link is conditionally rendered based on the isExpanded state.Please note that the logic to determine the number of lines may vary based on your specific styling and content. The example assumes each line is 16 pixels high. You might need to adjust this value based on your actual styling.";
  const maxCharacters = 300;
  const short = longText.substring(0, maxCharacters)

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
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title="Card title"
        description="This is the description"
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
          src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
          onClick={() => setVisible(true)}
        />
      </div>

      <div className='hidden'>
        <ImageAntd.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
          <ImageAntd src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" alt='' width={100} height={100} />
          <ImageAntd src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" alt='' width={100} height={100} />
          <ImageAntd src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" alt='' />
        </ImageAntd.PreviewGroup>
      </div>
    </Card>
  )
}

export default PostCard