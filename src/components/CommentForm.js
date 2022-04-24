import { Button, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import { createComment } from '../services/comment';
import { useAuth } from "./AuthProvider";

export const CommentForm = ({ reloadPost, postId }) => {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = useAuth();
  const token = auth.user?.token;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await createComment(postId, comment, token);
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