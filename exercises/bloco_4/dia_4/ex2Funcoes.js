let array = [2, 3, 6, 7, 10, 1]; 
let maior=0

for(let i=0; i<array.length; i++){
  if(array[i]>maior){
    maior = array[i]
  }
}

for(let a=0; a<array.length; a++){
  if(maior === array[a]){
    console.log(array.indexOf(array[a]))
  }
}