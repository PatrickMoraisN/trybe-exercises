const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (animal) => (
  new Promise((resolve, reject) => {
    const findAnimal = Animals.find(elem => elem.name === animal);
    if (findAnimal) {
      return resolve(findAnimal);
    };
    return reject('Nenhum animal com esse nome!');
  })
);

const getAnimal = (animal) => {
  return findAnimalByName(animal)
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      return expect(getAnimal('Dorminhoco')).resolves.toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
        return expect(getAnimal('bob')).rejects.toEqual('Nenhum animal com esse nome!')
      });
  });
});