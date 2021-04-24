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

  test('testando usuario conhecido', async (done)=> {
    const user = await getUserName(4)
    expect(user).toBe('Mark')
    done()
  })
  test('testando usuario desconhecido', async ()=> {
    try {
      await getUserName(1)
    } catch(error) {
      expect(error).toEqual({ error: 'User with 1 not found.' })
    }
  })