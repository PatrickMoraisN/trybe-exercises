let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicacao = []

for (let i = 0; i < numbers.length; i++) {
  if(numbers[i]*numbers[i+1]&& numbers[i]*numbers[i+1] !== NaN){
  multiplicacao.push(numbers[i]*numbers[i+1])
}
}

console.log(multiplicacao)

console.log(numbers.sort())