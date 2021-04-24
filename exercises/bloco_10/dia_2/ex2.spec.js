const users = {
  4 : { name: 'Mark' },
  5 : { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

  test('testando usuario conhecido', () => {
    return expect(getUserName(4)).resolves.toBe('Mark')
  })
  test('testando usuario desconhecido', () => {
    return expect(getUserName(1)).rejects.toEqual({ error: 'User with 1 not found.' })
  })