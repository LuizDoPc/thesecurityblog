import { baseURL } from '../utils/constants'

export const createComment = async (postId, content, token) => {
    const data = await fetch(`${baseURL}/posts/${postId}/comment`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token,
            content
        })
    }).then(res => res.json()).catch(err => console.log(err));

    return data;
}

export const deleteComment = async (postId, commentId, token) => {
    const data = await fetch(`${baseURL}/posts/${postId}/comment/${commentId}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token,
        })
    }).then(res => res.json()).catch(err => console.log(err));

    return data;
}