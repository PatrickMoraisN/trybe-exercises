const math = require('./ex2')
jest.mock('./ex2')

describe('testando div', () => {
  it('#div', () => {
    math.div.mockImplementation((a,b) => a/b)
    expect(math.div(10,5)).toBe(2)
  })
})