//Exercicio 7 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMenor = 99999999;
for(let i=0; i<numbers.length; i++){
  if(numbers[i]<numeroMenor){
    numeroMenor = numbers[i];
  }
}

console.log(numeroMenor);
