function palindromo(a) {
  for(let index=0; index<a.length; index++ ){
    if(a[index] === a[a.length-1-index]){
      console.log('true')
    }
    else{
      console.log('false')
    }
  }

}

palindromo('arara')