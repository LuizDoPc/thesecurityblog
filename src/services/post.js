import { baseURL } from '../utils/constants'

export const listPosts = async () => {
    const data = await fetch(`${baseURL}/posts`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    }).then(res => res.json()).catch(err => console.log(err));

    return data;
}

export const createPost = async ({ title, content }, token) => {
    const data = await fetch(`${baseURL}/posts`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            content,
            token
        })
    }).then(res => res.json()).catch(err => console.log(err));

    return data;
}

export const deletePost = async (postId, token) => {
 const data = await fetch(`${baseURL}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token
        })
    }).then(res => res.json()).catch(err => console.log(err));

    return data;
 }

export const getSinglePost = async (postId) => {
    const data = await fetch(`${baseURL}/posts/${postId}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    }).then(res => res.json()).catch(err => console.log(err));

    return data;
}