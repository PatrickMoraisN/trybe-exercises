const { TestScheduler } = require('@jest/core');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;

}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

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

describe('Requisito 2', () => {
  test('Retira o elemento 3', () => {
    expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4])
  })
  test('Testa se o array não está igual', () => {
    expect(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4])
  })
  test('Testa tirar um numero que não existe', () => {
    expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4])
  })
})