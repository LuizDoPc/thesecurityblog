import { Button, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import {createComment} from '../services/comment';

export const CommentForm = ({reloadPost}) => {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await createComment(comment);
    setLoading(false);

    await reloadPost();
  }

return (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={(text) => setComment(text.target.value)} value={comment} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={loading} onClick={handleSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
)
}