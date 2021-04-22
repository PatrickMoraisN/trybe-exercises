

const promise = new Promise((resolve, reject) => {
  let arr = [];
  for(let i = 0; i< 10; i++){
    const randomNumber = Math.floor(Math.random() *51);
    arr.push(randomNumber);
  }
  const sum = arr.reduce((acc, crr) => acc + crr**2, 0);
  if( sum < 8000){
    return resolve(sum);
  }
  reject(sum);
})
.then(sum => console.log('Promise resolvida, a soma foi ' + sum))
.catch(sum => console.log('MAIS DE 8000, a soma foi ' + sum))