const service = require('./ex4')


test('mock implementation', () => {

const upper = jest
.spyOn(service, "toUpper")
.mockImplementation((str) => str.toLowerCase())

expect(upper('OIOI')).toBe('oioi');
service.toUpper.mockRestore();
expect(service.toUpper('OIOI')).toBe('OIOI');
})