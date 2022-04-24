import { Card, List, Space } from 'antd';
import { MessageOutlined, ReadOutlined, UserOutlined} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import './Home.css';
import Title from 'antd/lib/typography/Title';
import { Link, useLocation } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { listPosts } from '../services/post';
import { AuthStatus, useAuth } from '../components/AuthProvider';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


export const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const auth = useAuth();


  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    (async () => {
      setLoading(true);
      const listData = await listPosts();
      setLoading(false);

      setData(listData)
    })()
  }, []);

  return (
    <div id='container'>
      <Card
        style={{ width: '100%', marginBottom: 50 }}
        cover={
          <img
            alt="example"
            src="https://static.cryptoid.com.br/wp-content/uploads/2019/01/seguran%C3%A7a-na-internet-2019-sectigo-1440x564_c.jpg"
          />
        }
      >
        <>
          <Title>The Security Blog</Title>
          {!auth.user && <LoginForm screenToNavigate={from} />}
          <AuthStatus />
        </>
      </Card>
      <List
        loading={loading}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <Link to={`post/${item.id}`}> <IconText icon={ReadOutlined} text="Ler post" key="list-vertical-details" /></Link>,
              <IconText icon={MessageOutlined} text={item.commentCounter} key="list-vertical-message" />,
              <IconText icon={UserOutlined} text={item.author?.name} key="list-vertical-message" />,
            ]}
          >
            <List.Item.Meta
              title={<Link to={`post/${item.id}`}>{item.title}</Link>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
}