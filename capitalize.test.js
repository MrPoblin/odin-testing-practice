const capitalize = require('./capitalize');

test('Capitalizes the first letter of string: testing', () => {
    expect(capitalize('testing')).toBe('Testing');
  });

  test('Returns an already capitalized string', () => {
    expect(capitalize('Testing')).toBe('Testing');
});

test('Returns an empty string', () => {
    expect(capitalize('')).toBe('');
});

test('Returns a stringified number', () => {
    expect(capitalize(123)).toBe("123");
});