import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import { deleteComment } from '../services/comment';
import { useAuth } from './AuthProvider';
import { DeleteOutlined } from '@ant-design/icons';


export const CommentList = ({ postId, data, reloadPost }) => {

  const auth = useAuth();
  const token = auth.user?.token;


  return (
    <div style={{ paddingBottom: 50 }}>
      <List
        className="comment-list"
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <li>
            <Comment
              author={item.author}
              content={item.content}
              datetime={
                <Tooltip title={moment(item.datetime).subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment(item.datetime).subtract(1, 'days').fromNow()}</span>
                </Tooltip>
              }
              actions={auth.user.roles.find(r => r.id === 2) ? [
                <Tooltip key="comment-basic-like" title="Delete">
                  <span onClick={async () => {
                    await deleteComment(postId, item.id, token);
                    await reloadPost()
                  }}>
                    <DeleteOutlined />
                  </span>
                </Tooltip>
              ] : []}
            />
          </li>
        )}
      />
    </div>
  )
}