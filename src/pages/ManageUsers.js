import { Button, Card, Select, Space, Spin, Table, Tag } from 'antd';
import Title from 'antd/lib/typography/Title';
import './CreatePost.css'
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { deleteUser, listRoles, listUsers, updateUserRole } from '../services/user';
import { useEffect, useState } from 'react';

const getTagByRole = (role) => {
  switch (role) {
    case 'admin':
      return 'green'
    case 'user':
      return 'geekblue'
    case 'creator':
      return 'purple'
    case 'mod':
      return 'volcano'
  }
}

export const ManageUsers = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [roles, setRoles]= useState([]);

  const fetchUsers = async (values) => {
    setLoading(true);
    const users = await listUsers(values);
    const rls = await listRoles();
    setData(users);
    setRoles(rls);
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

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

      {!loading && <Table columns={[
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <Title level={4}>{text}</Title>,
          align: 'center'
        },
        {
          title: 'Role',
          key: 'role',
          dataIndex: 'role',
          render: (text, record) => (
            <Tag color={getTagByRole(record.role)}>
              {record.role}
            </Tag>
          ),
          align: 'center'
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle" direction='vertical'>
              <Select onChange={async value => {
                setLoading(true);
                await updateUserRole(record.id, value);
                await fetchUsers();
              }} defaultValue={record.role} style={{ width: 100 }}>
                {roles.map(role => (
                  <Select.Option key={role} value={role}>{role}</Select.Option>
                ))}
              </Select>
              <Button type="danger" onClick={async () => {
                setLoading(true);
                await deleteUser(record.id);
                await fetchUsers();
              }} style={{ width: 100 }}>Delete</Button>
            </Space>
          ),
          align: 'center'
        },
      ]} dataSource={data} />}
    </div>
  )
}