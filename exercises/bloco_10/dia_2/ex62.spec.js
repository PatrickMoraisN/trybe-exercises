// Solução
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];


const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const listAnimals = Animals.find((animal) => animal.age === age);
      if (listAnimals) {
        return resolve(listAnimals);
      };
      return reject('Nenhum animal encontrado!');
    }, 100);
  })
);


const getAnimalByAge = (age) => {
  return findAnimalByAge(age)
};
// Testes
describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com o a idade', () => {
    test('Verifique o primeiro nome do animal no array retornado', () => {
      return expect(getAnimalByAge(5)).resolves.toEqual({ name: 'Preguiça', age: 5, type: 'Cat' });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      return expect(getAnimalByAge(32)).rejects.toEqual('Nenhum animal encontrado!')
    });
  });
});