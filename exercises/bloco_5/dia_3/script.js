function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let getDaysList = document.getElementById('days')

  for (let i = 0; i < dezDaysList.length; i++) {
    let day = dezDaysList[i];
    let dayItem = document.createElement('li');

    if (day === 25) {
      dayItem.classList.add('day')
      dayItem.classList.add('holiday')
      dayItem.classList.add('friday')
      dayItem.innerHTML = day
      getDaysList.appendChild(dayItem);

    } else if (day === 24 || day == 31) {
      dayItem.classList.add('day')
      dayItem.classList.add('holiday')
      dayItem.innerHTML = day
      getDaysList.appendChild(dayItem)
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.classList.add('day')
      dayItem.classList.add('friday')
      dayItem.innerHTML = day
      document.getElementById('days').appendChild(dayItem)
    } else {
      dayItem.classList.add('day')
      dayItem.innerText = day
      getDaysList.appendChild(dayItem)
    }
  }
}

createDaysOfTheMonth()

function holidays(feriados) {
  let button = document.createElement('button');
  button.id = 'btn-holiday'
  button.innerHTML = feriados
  document.querySelector('.buttons-container').appendChild(button)
}

holidays('Feriados')

function displayHolidays() {
  let getBtn = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let background = 'rgb(238, 238, 238)';
  let changeBG = 'yellow'

  getBtn.addEventListener('click', clickholiday)

  function clickholiday() {
    for (let i = 0; i < getHolidays.length; i += 1) {
      if (getHolidays[i].style.backgroundColor === background) {
        getHolidays[i].style.backgroundColor = changeBG
      } else {
        getHolidays[i].style.backgroundColor = background
      }
    }
  }
}

displayHolidays()


function fridayBtn(e) {
  let dadBtnFridayElement = document.querySelector('.buttons-container')
  let fridayBtn = document.createElement('button')
  fridayBtn.id = 'btn-friday'
  fridayBtn.innerHTML = e
  dadBtnFridayElement.appendChild(fridayBtn)
}

fridayBtn('Sexta-Feira')



function friday() {
  let background = 'blue'
  let bgDefault = 'rgb(238,238,238)'
  let getFridays = document.querySelectorAll('.friday')
  let getBtnFriday = document.querySelector('#btn-friday')

  getBtnFriday.addEventListener('click', clickFriday)

  function clickFriday() {

    for (let i = 0; i < getFridays.length; i++) {
      if (getFridays[i].style.backgroundColor === background) {
        getFridays[i].style.backgroundColor = bgDefault
      } else {
        getFridays[i].style.backgroundColor = background
      }
    }
  }
}

friday()


