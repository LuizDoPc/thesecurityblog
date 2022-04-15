import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';

export const CommentList = ({ data }) => {

  return (
    <div style={{paddingBottom: 50}}>
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
              datetime={<Tooltip title={moment(item.datetime).subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment(item.datetime).subtract(1, 'days').fromNow()}</span>
              </Tooltip>}
            />
          </li>
        )}
      />
    </div>
  )
}