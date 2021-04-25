const math = require('./ex2')
jest.mock('./ex2')


describe('testando ex2', () => {
  test('com 3 parametros', () => {
    math.div.mockImplementation((a,b,c) => a*b*c)
    expect(math.div(2,4,6)).toBe(48)
    math.div.mockReset()
    math.div.mockImplementation((a) => a*2)
    expect(math.div(2)).toBe(4)
  })
})