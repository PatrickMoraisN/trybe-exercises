let randomNumber = () => {
  return Math.random()*100
}


describe('Testnado randomNumber', () => {
  test('testando 10', () => {
    randomNumber = jest
    .fn()
    .mockReturnValue(10)
    expect(randomNumber()).toBe(10)
  })
})