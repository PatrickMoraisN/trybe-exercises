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


function dayMouseOver() {
  let day = document.querySelector('#days')

  day.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px'
    event.target.style.fontWeight = '600'
  })
}
dayMouseOver();

function dayMouseOut() {

  let day = document.querySelector('#days')

  day.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px'
    event.target.style.fontWeight = '200'
  })

}
dayMouseOut()


function tasks(param) {
  let divPai = document.querySelector('.my-tasks')

  let tarefaCriada = document.createElement('span');
  tarefaCriada.innerHTML = param;
  divPai.appendChild(tarefaCriada)

}
tasks('cozinhar')

function colorChange(color) {
  let divPai = document.querySelector('.my-tasks')
  let createDiv = document.createElement('div')
  createDiv.className = 'task'
  createDiv.style.backgroundColor = color

  divPai.appendChild(createDiv)
}
colorChange('red')

function taskSelected() {
  let task = document.querySelector('.task')

  task.addEventListener('click', function(event){
    if (task.classList.contains('selected') === true) {
      task.classList.remove('selected')
    } else {
      task.classList.add('selected')
    }
  })
}
taskSelected()


function changeDayColor(){
  let day = document.querySelector('#days')
  let taskSelect = document.querySelector('.task')
  let colorTask = 'red'
  let colorDefault = 'rgb(119,119,119)'
  
  day.addEventListener('click', function(event){
    if(event.target.style.color === colorTask && taskSelect.classList.contains('selected')){
      event.target.style.color = colorDefault
    } else if(taskSelect.classList.contains('selected')){
      event.target.style.color = colorTask
    }
  })

}
changeDayColor()


function addNewTask() {
let getBtnAdd = document.getElementById('btn-add')
let getTaskList = document.querySelector('.task-list')
let getInputField = document.querySelector('#task-input')


getBtnAdd.addEventListener('click', function(){
if(getInputField.value.length > 0){
  let newLi = document.createElement('li')
  newLi.innerText = getInputField.value

  getTaskList.appendChild(newLi)
  getInputField.value = ''
} else {
  alert('Digite algo!!')
}
})

getInputField.addEventListener('keyup', function(event){
if(event.keyCode === 13 && getInputField.value.length > 0){
  let newLi = document.createElement('li')
  newLi.innerText = getInputField.value

  getTaskList.appendChild(newLi)
  getInputField.value = ''

} else if (event.keyCode === 13 && getInputField.value.length === 0){
  alert('Digite algo!')
}

})



}
addNewTask()



