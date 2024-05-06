'use client'
import React, { useState, useEffect } from 'react';
import { Card, Avatar, Collapse, Typography, App } from 'antd';
import Icon, { EditOutlined, EllipsisOutlined, HeartOutlined, SettingOutlined } from '@ant-design/icons';
import ImageAntd from 'antd/lib/image';
import { community_list } from '@/models/community';
import { handleLikePost } from '@/app/(app)/community/actions';
import { NotificationSuccess } from '@/helper/alert-modals';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { useSession } from 'next-auth/react';
const { Paragraph, Text } = Typography;
const { Meta } = Card;

type Props = {
  data: community_list;
};

const PostCard: React.FunctionComponent<Props> = ({ data }) => {
  console.log('data',data.post_images)
  const { data: session } = useSession()
  const [visible, setVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [postImages, setPostImages] = useState<string[]>([]);

  const { notification } = App.useApp()


  const HeartSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
      <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
  );
  const handleChangeColorLike = () => {
    const likes: string[] = data.post_likes
    if (data?.post_likes?.includes(session?.user.code || "")) {
      return 'rgb(2 132 199 / var(--tw-bg-opacity)) '
    } else {
      return "#CCCCCC"
    }

  }
  const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
    <div>
      <div className='flex gap-4 justify-center align-middle'>
        <div>
          <Icon component={HeartSvg} {...props} onClick={handleOnLikePost} style={{ color: handleChangeColorLike(), fontSize: "30px" }} />
        </div>

        <div>
          <p className='mt-1'>{data.post_likes?.length}</p>
        </div>

      </div>
    </div>


  );
  const renderContentWithLineBreaks = (text: string) => {
    return text?.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  const handleOnLikePost = () => {
    console.log('data', data)
    const payload = {
      post_id: data.id,
      post_likes: data.post_likes
    }
    handleLikePost(payload).then((response) => {
      NotificationSuccess(notification, response.message)
    }).catch((error) => {
      console.log('error', error)
    })
  }
  return (
    <Card
      className="w-[800px]"
      actions={[
        <HeartIcon key="like" />,
      ]}
    >
      <Meta
        avatar={data.profile_img?<Avatar src={data.profile_img} size={50} />:    <Avatar style={{ backgroundColor: '#f56a00' }}>{data.first_name.charAt(0).toUpperCase()}</Avatar>}
        title={data.email}
        description={data.post_created_at}

      />

      <Paragraph className='mt-4' ellipsis={true ? { rows: 3, expandable: true, symbol: 'ดูเพิ่มเติม' } : false}>
        {renderContentWithLineBreaks(data.post_content)}
      </Paragraph>
      {data.post_images?.length > 0 && (
        <>
          <div className="overflow-y-hidden mt-4 h-[400px]">
            <ImageAntd
              preview={{ visible: false }}
              className="w-full"
              src={data.post_images.length > 0 ? data.post_images[0] : ''}
              onClick={() => setVisible(true)}
            />
          </div>

          <div className="hidden">
            <ImageAntd.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
              {data.post_images?.length > 0 && data.post_images?.map((image, index) => (
                <ImageAntd key={index} src={image} alt={`Image ${index}`} />
              ))}
            </ImageAntd.PreviewGroup>
          </div>
        </>
      )}
    </Card>
  );
};

export default PostCard;
