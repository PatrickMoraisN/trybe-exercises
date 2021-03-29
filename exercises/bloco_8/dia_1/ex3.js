const checkAnswer = (gabarito) => (resposta) => {
  let respostaFinal = resposta.toLowerCase();
  return gabarito === respostaFinal ? 'Parabens vc acertou' : 'Vc errou'
}

console.log(checkAnswer('pedro')('PEDRO'))