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
            {auth.user.roles.find(r => r.id === 3) && <Button
                type="primary"
                onClick={() => {
                    navigate('/createPost');
                }}
            >
                Create Post
            </Button>}
            {auth.user.roles.find(r => r.id === 2) && <Button
                onClick={() => {
                    navigate('/manageUsers');
                }}
            >
                Manage Users
            </Button>}
        </Space>
    )
}