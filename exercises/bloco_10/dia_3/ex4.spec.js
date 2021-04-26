const service = require('./ex4')
jest.mock('./ex4')


test('mock implementation', () => {
service.toUpper.mockImplementation((str) => str.toLowerCase());
service.firstLetter.mockImplementation((str) => str[str.length-1]);
service.concatTwo.mockImplementation((a,b,c) => `${a}${b}${c}`);

expect(service.toUpper('OIOI')).toBe('oioi')
expect(service.firstLetter('OIOI')).toBe('I')
expect(service.concatTwo('OIOI', 'cucu', 'uiui')).toBe('OIOIcucuuiui')
})