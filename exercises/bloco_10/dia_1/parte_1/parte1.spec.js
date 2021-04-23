const { TestScheduler } = require('@jest/core');
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;

}

describe('Requisito siberiano 1', () => {
  test('testando soma 4 e 5', () => {
    expect(sum(4, 5)).toBe(9)
  })

  test('testando letras', () => {
    expect(() => { sum('a', 'b') }).toThrowError(new Error('parameters must be numbers'));
  })
  test('testando "5"', () => {
    expect(() => { sum(4, '5') }).toThrow();
  })
})