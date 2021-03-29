const hofTorneio = number => check(number) ? 'Parabens, acertou' : 'vc deu uma erradinha'


const check = (number) => {
  let randomNumber = Math.floor(Math.random()*6);
  return number === randomNumber ? true : false;
}

console.log(hofTorneio(3));
