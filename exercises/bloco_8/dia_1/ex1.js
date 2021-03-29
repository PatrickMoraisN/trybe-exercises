const newEmployees = () => {
  const employees = {
    id1: nameEmail('Pedro Guerra'),
    id2: nameEmail('Luiza Drumond '),
    id3: nameEmail('Carla Paiva '),
  }
  return employees;
};

const nameEmail = (cand) => {
  let splitCand = cand.split(' ')

  const objName = {
    name: `${cand}`,
    email: `${splitCand[0]}_${splitCand[1]}@trybe.com`,
  }
  return objName;
}

console.log(newEmployees())