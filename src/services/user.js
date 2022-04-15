export const listUsers = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        [
          {
            id: 1,
            name: 'John Doe',
            role: 'user'
          },
          {
            id: 2,
            name: 'John Doe',
            role: 'creator'
          }, {
            id: 3,
            name: 'John Doe',
            role: 'mod'
          }, {
            id: 4,
            name: 'John Doe',
            role: 'admin'
          }, {
            id: 5,
            name: 'John Doe',
            role: 'user'
          },
        ]
      );
    }, 2000);
  })
}

export const deleteUser = async () => { }

export const updateUserRole = async () => { }