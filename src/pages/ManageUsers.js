import { Button, Card, Select, Space, Spin, Table, Tag } from 'antd';
import Title from 'antd/lib/typography/Title';
import './CreatePost.css'
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { deleteUser, listRoles, listUsers, updateUserRole } from '../services/user';
import { useEffect, useState } from 'react';
import { useAuth } from '../components/AuthProvider';

const getTagByRole = (role) => {
  switch (role) {
    case 1:
      return 'geekblue'
    case 3:
      return 'purple'
    case 2:
      return 'volcano'
  }
}

function tagRender(props) {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={getTagByRole(value)}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}

export const ManageUsers = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [roles, setRoles] = useState([]);

  const auth = useAuth();
  const token = auth.user?.token;

  const fetchUsers = async () => {
    setLoading(true);
    const users = await listUsers(token);
    const rls = await listRoles(token);
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
          render: (text, record) => record?.roles?.map(r => (
            <Tag color={getTagByRole(r.id)}>
              {r.name}
            </Tag>
          )),
          align: 'center'
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle" direction='vertical'>
              <Select
                mode="multiple"
                showArrow
                tagRender={tagRender}
                onChange={async value => {
                  setLoading(true);
                  await updateUserRole(record.id, value, token);
                  await fetchUsers();
                }}
                defaultValue={record.roles.map(o => o.id)}
                style={{ width: 200 }}>
                {roles.map(role => (
                  <Select.Option key={role.id} value={role.id}>{role.name}</Select.Option>
                ))}
              </Select>
              <Button type="danger" onClick={async () => {
                setLoading(true);
                await deleteUser(record.id, token);
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