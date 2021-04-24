const uppercase = (str, callback) => {
  if(str.length === 0){
    throw 'Valor deve ser string'
  }
  callback(str.toUpperCase());
};

describe('When call uppercase function', () => {
  test('if it return upper case string', async (done) => {
    uppercase('oioi', (str) => {
      expect(str).toBe('OIOI')
      done()
    })
  })
})