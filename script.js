const img = document.querySelector('img')
const input = document.querySelector('input')
const error = document.querySelector('.error')
const error2 = document.querySelector('.error2')
const answer = document.querySelector('.answer')
const answer2 = document.querySelector('.answer2')
const answers = [
  'Tak!',
  'Nie!',
  'Może',
  'Cieżko powiedzieć...',
  'Nie chcesz znać odpowiedzi na to pytanie... ;/'
]

const shakeAnimation = () => {
  img.classList.add('shake-animation')

}

const questionMark = () => {
      if(input.value !== '' & input.value.slice(-1) === '?'){
        const number = Math.floor(Math.random() * answers.length)
        answer.textContent = answers[number]
        answer2.style.display = 'block'
        error.textContent = ''
      }else if(input.value.slice(-1) !== '?' && input.value !== ''){
        error.textContent = 'Pytanie musi być zakończone znakiem "?"'
        error.style.marginLeft = '-75px'
        answer.textContent = ''
        answer2.style.display = 'none'
      }else if (input.value == ''){
        answer.textContent = ''
        answer2.style.display = 'none'
        error.textContent = 'Musisz zadać jakieś pytanie!'
      }
      img.classList.remove('shake-animation')
}


img.addEventListener('click', () => {
  shakeAnimation()
  setTimeout(questionMark, 1000)
    
})
























