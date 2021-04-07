
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let num = 0;
for(let i = 0; i<names.length; i++) {
  for(let b = 0; b<names[i].length; b++){
    if(names[i][b] === 'A' || names[i][b] === 'a'){
      num++;
    }
  }
}
return num
}

assert.deepStrictEqual(containsA(), 20);