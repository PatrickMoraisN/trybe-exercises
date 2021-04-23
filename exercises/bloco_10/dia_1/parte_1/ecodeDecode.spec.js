function encode(encodeParam) {
  let encodeRel = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return encodeParam.replace(/[aeiou]/g, (m) => encodeRel[m]);
}

function decode(decodeParam) {
  let decodeRel = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return decodeParam.replace(/[12345]/g, (m) => decodeRel[m]);
}

describe('Requisito encode e decode', () => {
  test('testando encode com letras', () => {
    expect(encode('a')).toEqual('1')
  })
  test('testando decode com numeros', () => {
    expect(decode('1')).toEqual('a')
  })
  test('testando encode com letras aleatorias', () => {
    expect(encode('w')).toEqual('w')
  })
  test('testando decode com numeros aleatorios', () => {
    expect(decode('96')).toEqual('96')
  })
})