const gabarito1 = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const resposta1 = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkPoints = (gabarito) => (resposta) => total(gabarito, resposta) 

const total = (gabarito, resposta) => {
  let points = 0;
  for(let i = 0; i < gabarito.length; i++){
    if(gabarito[i] === resposta[i]){
      points += 1
    } else if (gabarito[i] !== resposta[i] && resposta[i] !== 'N.A' ){
      points -= 0.5
    }
  }
  return points;
};

console.log(checkPoints(gabarito1)(resposta1));