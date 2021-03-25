const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (obj, key, value) => obj[key] = value

addTurno(lesson2, 'turno', 'manha')

const listKeys = (obj) => Object.keys(obj)

const objLength = (obj) => Object.keys(obj).length

const listValue = (obj) => Object.values(obj)

const allLessons = Object.assign({} , {lesson1,lesson2,lesson3})

const allStudents = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes

const getValueByNumber = (obj, index) => {
  let array = Object.values(obj)
  let value = array[index]
  return value
}

const verifyPair = (obj, key, value) => obj[key] && obj[key] === value

console.log(verifyPair(lesson3, 'materia', 'Maria weweewClara'));