import { Button, Card, Spin } from 'antd';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { deletePost, getSinglePost } from '../services/post';
import { ArrowLeftOutlined } from '@ant-design/icons';

import './Post.css';
import { CommentList } from '../components/CommentList';
import { CommentForm } from '../components/CommentForm';
import { useAuth } from '../components/AuthProvider';

export const Post = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState(null);

  const auth = useAuth();
  const token = auth.user?.token;

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
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Title level={2}>{postData?.title}</Title>

            {auth?.user?.roles?.find(r => r.id === 2) && (
              <Button
                type="danger"
                onClick={async () => {
                  await deletePost(postData.id, token);
                  navigate('/')
                }}
                style={{ width: 100, marginLeft: 7, marginTop: 7 }}>
                Delete
              </Button>
            )}

          </div>
          <Paragraph id='post'>
            {postData.content}
          </Paragraph>

          {!!auth.user && <CommentForm reloadPost={getPost} postId={postData?.id} />}

          <CommentList postId={postData?.id} reloadPost={getPost} data={postData.comments} />
        </>
      )}

    </div>
  )
}