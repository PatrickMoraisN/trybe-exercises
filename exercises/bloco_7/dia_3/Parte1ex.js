
const assert = require('assert');


///////////////////---EXERCICIO 1---//////////////////// 
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('parameters must be numbers');
  
  return a + b;
}

assert.deepStrictEqual(sum(4,5), 9)
assert.deepStrictEqual(sum(0,0), 0)
//assert.deepStrictEqual(sum(0,'5'), 'Error')


///////////////////---EXERCICIO 2---//////////////////// 
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([1,2,3,4], 3), [1,2,4]);
assert.notDeepStrictEqual(myRemove([1,2,3,4], 3), [1,2,3,4])
assert.deepStrictEqual(myRemove([1,2,3,4], 5), [1,2,3,4])


///////////////////---EXERCICIO 3---//////////////////// 
function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,4])
const array = [1,2,3,4]

myRemoveWithoutCopy(array, 1)
assert.deepStrictEqual(array.length, 3)


///////////////////---EXERCICIO 4---//////////////////// 

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.deepStrictEqual(myFizzBuzz(6), 'fizz')
assert.deepStrictEqual(myFizzBuzz(25), 'buzz')
assert.deepStrictEqual(myFizzBuzz(17), 17)
assert.deepStrictEqual(myFizzBuzz('a'), false)


///////////////////---EXERCICIO 4---//////////////////// 
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2)

assert.notDeepStrictEqual(obj1, obj3)