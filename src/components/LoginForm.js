import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';


export const LoginForm = ({ screenToNavigate }) => {
  const [form] = Form.useForm();
  const auth = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const onFormSubmit = async (values) => {
    setLoading(true);
    const status = await auth.signin({ user: values.user, pass: values.password }, () => {
      setLoading(false);
      navigate(screenToNavigate, { replace: true })
    })
    setLoading(false);
    setError(!status)
  };

  return (
    <>
      <Form
        layout='inline'
        form={form}
        onFinish={onFormSubmit}
      >
        <Form.Item name="user">
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item name="password">
          <Input placeholder="pass" type='password' />
        </Form.Item>
        <Form.Item>
          <Button loading={loading} type="primary" htmlType="submit">Login</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={() => {
            navigate('/register', { replace: true })
          }} >Singup</Button>
        </Form.Item>
      </Form>
      {error && <p>Usuário ou senha inválidos.</p>}
    </>
  );
};