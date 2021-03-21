let lineStorage = ''

function changeLineHeight15() {
  let paragraphLine = document.querySelector('.container p')
  const line15 = '1.5';
  const line = '1.0';

  if (paragraphLine.style.lineHeight === line15) {
    paragraphLine.style.lineHeight = line;
    let lineStorage = line
  } else if (paragraphLine.style.lineHeight !== line15) {
    paragraphLine.style.lineHeight = line15;
    let lineStorage = line15
  }
}

function btnLineHeight15() {
  let btnLine = document.querySelector('#line-heigh-15')

  btnLine.addEventListener('click', changeLineHeight15)
}


function changeLineHeight25() {
  let paragraphLine = document.querySelector('.container p')
  const line25 = '2.5';
  const line = '1.0';

  if (paragraphLine.style.lineHeight === line15) {
    paragraphLine.style.lineHeight = line;
    let lineStorage = line
  } else if (paragraphLine.style.lineHeight !== line25) {
    paragraphLine.style.lineHeight = line25;
    let lineStorage = line25
  }
}

function btnLineHeight25() {
  let btnLine = document.querySelector('#line-heigh-25')

  btnLine.addEventListener('click', changeLineHeight25)
}

function storage() {
  localStorage.
}



btnLineHeight25()
btnLineHeight15()