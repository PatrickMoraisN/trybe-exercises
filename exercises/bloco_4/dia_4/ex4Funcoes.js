function maiorPalavra(palavra){
  let maior = palavra[0]
  for(let index in palavra){
    if(maior.length < palavra[index].length){
      maior = palavra[index]
    }
  }
  return maior
}
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))