const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// if change to beforeAll, only run once
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database Initialized...')
const closeDatabase = () => console.log('Database Closed...')

//toBe
test('Adds 2+2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2+2 to Not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull
test('Should be Null', () => {
  expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

//toEqual,can not use 'toBe', only accept number and string, not object.so change to 'toEqual'
test('User should be Brad Traversy object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy'
  });
});

//Less than and greater
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

//Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

//Working with async data
// Promise
// test('User fetched name should be Leanne Graham', () => {
//   functions.fetchUser()
//     .then(data => {
//       expect(data.name).toEqual('Leanne Graham');
//     });
// });

//Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});