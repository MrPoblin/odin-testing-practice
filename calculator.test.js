const calculator = require('./calculator');

test('Adds simple numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('Adds negative numbers', () => {
    expect(calculator.add(-10, -22)).toBe(-32);
});


test('Subtracts simple numbers', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});


test('Multiplies simple numbers', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});


test('Divides simple numbers', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
});

test('Divides by zero', () => {
    expect(calculator.divide(1, 0)).toBe(Infinity);
});
