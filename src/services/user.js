import { baseURL } from '../utils/constants'

export const listUsers = async (token) => {
  const data = await fetch(`${baseURL}/users?token=${token}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
  }).then(res => res.json()).catch(err => console.log(err));

  return data;
}

export const deleteUser = async (userId, token) => {
  const data = await fetch(`${baseURL}/users/${userId}`, {
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

export const updateUserRole = async (userId, roleIds, token) => {
  const data = await fetch(`${baseURL}/users/${userId}/updateRoles`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      role_ids: roleIds,
      token
    })
  }).then(res => res.json()).catch(err => console.log(err));

  return data;
}

export const listRoles = async (token) => {
  const data = await fetch(`${baseURL}/roles?token=${token}`, {
    method: 'GET',
    headers: {
      "content-type": "application/json"
    },
  }).then(res => res.json()).catch(err => console.log(err));

  return data;
}


export const requestUserCreation = async (email) => {
  const data = await fetch(`${baseURL}/users/requestCreation`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email
    })
  }).then(res => res.json()).catch(err => console.log(err));

  return data;
}

export const createUser = async (user) => {
  const creationToken = await requestUserCreation(user.email);

  if (creationToken) {
    const regex = /(Para continuar o cadastro do usuário com seu e-mail, acesse o link: )(.+)(\. Caso contrário, apenas desconsidere o e-mail.)/;
    const isolatedToken = creationToken.match(regex)
    
    const data = await fetch(`${baseURL}/users`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: user.name,
        password: user.password,
        creation_token: isolatedToken[2]
      })
    }).then(res => res.json()).catch(err => console.log(err));

    return data;
  }
}