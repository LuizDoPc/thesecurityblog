import { baseURL } from '../utils/constants'

const AuthServiceProvider = {
    isAuthenticated: false,
    signin: async ({ user, pass }, callback) => {
        const data = await fetch(`${baseURL}/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: user,
                password: pass
            })
        }).then(res => res.json()).catch(err => console.log(err));

        if (data?.user?.id) {
            AuthServiceProvider.isAuthenticated = true;
            callback(data);
            return true;
        }
        return false
    },
    signout: async (callback) => {
        AuthServiceProvider.isAuthenticated = false;
        callback();
    },
};

export { AuthServiceProvider };
