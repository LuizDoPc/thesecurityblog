import { Button, Card, Spin } from 'antd';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { getSinglePost } from '../services/post';
import { ArrowLeftOutlined } from '@ant-design/icons';

import './Post.css';
import { CommentList } from '../components/CommentList';
import { CommentForm } from '../components/CommentForm';

export const Post = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState(null);

  const getPost = useCallback(async () => {
    setLoading(true)
    const post = await getSinglePost(postId)
    setLoading(false)

    setPostData(post)
  }, [postId]);

  useEffect(() => {
    getPost()
  }, [getPost]);

  return (
    <div id='container'>
      <Card
        style={{ width: '100%', marginBottom: 50 }}
      >
        <Title level={1}>The Security Blog</Title>
        <Button type="primary" icon={<ArrowLeftOutlined />} onClick={() => {
          navigate('/');
        }}>
          Home
        </Button>
      </Card>

      {loading && <div id='loadingContainer'><Spin size='large' /></div>}

      {!loading && postData && (
        <>
          <Title level={2}>{postData?.title}</Title>
          <Paragraph id='post'>
            {postData.content}
          </Paragraph>
          <CommentForm reloadPost={getPost} />
          <CommentList data={postData.comments} />
        </>
      )}

    </div>
  )
}