const reverseString = require('./reverseString');

test('Reverses the string: testing', () => {
    expect(reverseString('testing')).toBe('gnitset');
});

test('Reverses a string with spaces', () => {
    expect(reverseString(' Goo gle')).toBe('elg ooG ');
});

test('Returns an empty string', () => {
    expect(reverseString('')).toBe('');
});

test('Reverses a number', () => {
    expect(reverseString(123)).toBe("321");
});