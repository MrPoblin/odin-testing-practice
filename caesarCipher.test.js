const caesarCipher = require('./caesarCipher');

test('Cipher the string: test', () => {
    expect(caesarCipher('test', 3)).toBe('whvw');
});

test('Cipher withc capital letters', () => {
    expect(caesarCipher('Ok', 2)).toBe('Qm');
});


test('Cipher with wrapping', () => {
    expect(caesarCipher('zoo', 4)).toBe('dss');
});

test('Cipher with punctuation', () => {
    expect(caesarCipher('wow, nice!', 1)).toBe('xpx, ojdf!');
});

test('Returns an empty string', () => {
    expect(caesarCipher('', 0)).toBe('');
});

test('Returns the same stringified number', () => {
    expect(caesarCipher(123, 5)).toBe("123");
});