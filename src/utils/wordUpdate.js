export const wordUpdate = (secretWord, letter, life) => {
  let cont = 0
  console.log(secretWord)
  const divsWord = document.querySelectorAll('.letter')
  for (let i in secretWord) {
    if (secretWord[i] === letter) {
      divsWord[i].textContent = letter
      cont++
    }
  }
  if (cont === 0) {
    life--
    return {
      wrongGuess: true, 
      error: `A palavra não possui essa letra! você tem ${life} tentativa(s)`,
      life:life
    }
  }
  else {
    return {
      wrongGuess: false, 
      error: '',
      life:life
    }
  }
}