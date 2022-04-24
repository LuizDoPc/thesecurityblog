import { Button, Card, Form, Input } from 'antd';
import Title from 'antd/lib/typography/Title';
import './Register.css'
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useAuth } from '../components/AuthProvider';
import { createUser } from '../services/user';

export const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const auth = useAuth();

  const onFinish = async (values) => {
    if (!values.name || !values.email || !values.password)  return 
    
    setLoading(true);
    await createUser(values, auth.user?.token);
    setLoading(false);

    navigate('/');
  }

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

      <Form layout="vertical" name="nest-messages" onFinish={onFinish} id="form">
        <Form.Item name="email" >
          <Input placeholder="email" type="email" />
        </Form.Item>
        <Form.Item name="name">
          <Input placeholder="name" />
        </Form.Item>
        <Form.Item name="password">
          <Input placeholder="pass" type='password' />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}