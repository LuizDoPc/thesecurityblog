import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const Menu = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <>
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
        </>
    )
}