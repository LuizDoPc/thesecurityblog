import React from 'react';
import { Form, Input, Button } from 'antd';
import { loginUserPass } from '../services/auth';


export const LoginForm = () => {
    const [form] = Form.useForm();

    const onFormSubmit = (values) => {
        loginUserPass(values.username, values.password);
    };

    return (
        <Form
            layout='inline'
            form={form}
            onFinish={onFormSubmit}
        >
            <Form.Item name="user">
                <Input placeholder="username" />
            </Form.Item>
            <Form.Item name="password">
                <Input placeholder="pass" type='password'/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Login</Button>
            </Form.Item>
        </Form>
    );
};