const reverseString = require('./reverseString');
test('reverseString function exists', () => {
  expect(reverseString).toBeDefine();
});
test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
});