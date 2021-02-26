let array = [2, 4, 6, 7, 10, 0, -3];
let menor = 999999;

for(let i=0; i<array.length; i++){
  if(array[i]<menor){
    menor=array[i]
  }
}

for(let a=0; a<array.length; a++){
  if(array[a] === menor){
    console.log(array.indexOf(array[a]))
  }
}