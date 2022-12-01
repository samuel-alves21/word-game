import { data } from '../data/data'
import { getRamdom } from './getRandom';

export const setSecretWordUtils = (e) => {
  const choosedTopic = e.target.innerText
  const secretWord = data[choosedTopic][getRamdom()]
  const secretWordArr = []

  for (let letter of secretWord) {
    secretWordArr.push(' ')
  }
  
  return[secretWord, secretWordArr, choosedTopic]
}
