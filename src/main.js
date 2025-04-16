import './style.scss'

const clock = document.querySelector('.clock')

const interval = setInterval(clockInterval, 1000)

function clockInterval(){

  const now = new Date();
  const seconds = now.getSeconds().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const hours = now.getHours().toString().padStart(2, '0')

  const time =  hours + ' ' + ":" + ' ' + minutes + ' ' + ":" + ' ' + seconds

  clock.textContent = time
}