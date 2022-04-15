import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const Menu = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <Space>
            <Button
                type="danger"
                onClick={() => {
                    auth.signout(() => navigate("/"));
                }}
            >
                Sign out
            </Button>
            <Button
                type="primary"
                onClick={() => {
                    navigate('/createPost');
                }}
            >
                Create Post
            </Button>
            <Button
                onClick={() => {
                    navigate('/manageUsers');
                }}
            >
                Manage Users
            </Button>
        </Space>
    )
}