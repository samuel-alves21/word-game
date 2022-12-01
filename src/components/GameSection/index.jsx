import { Component } from "react"

import { verify } from "../../utils/verify"
import { wordUpdate } from "../../utils/wordUpdate"
import { Result } from "../Results"

import './styles.css'
import { GameInterface } from "../GameInterface"

export class GameSection extends Component{
  state = {
    letter: ' ',
    letterInput: '',
    error: '',
    pickedWords: [],
    life: 4,
    finishGame: false,
    result: null
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) this.handleClick()
  }

  handleChange = (e) => {
    this.setState({letterInput: e.target.value})
  }

  handleClick = () => {
    const {letterInput, pickedWords} = this.state
    const result = verify(letterInput, pickedWords)
    const l = document.querySelector('.letter-input').value = ''
    if (result.isValid) { 
      pickedWords.push(letterInput)
      this.setState({
        letter: letterInput, 
        letterInput: l, 
        error: '',
        pickedWords
      })
    }
    else {
      this.setState({error: result.error})
      return
    }
  }

  componentDidUpdate() {
    const { letter, life, finishGame } = this.state
    const { secretWord } = this.props
    if (finishGame) return
    if (letter !== ' ') {
      const result = wordUpdate(secretWord, letter, life)
      this.setState({
        letter: ' ', 
        error: result.error,
        life: result.life
      })
    }

    if (life === 0) {
      this.setState({
        finishGame: true, 
        result: {
          title: 'Você PERDEU!!',
          body: `A palavra era ${secretWord.toUpperCase()}, recarregue para jogar novamente...`
        }
      })
      return
    }
    let cont = 0
    const divsWord = document.querySelectorAll('.letter')
    for (let i in secretWord) {
      if (divsWord[i].textContent !== ' ') {
        cont++
      }
    }
    if (cont === secretWord.length) {
      this.setState({
        finishGame: true, 
        result: {
          title: 'Você GANHOU!!',
          body: `A palavra era ${secretWord.toUpperCase()}, recarregue para jogar novamente...`
        }
      })
    }
  }

  render() {
    const {finishGame, result, error} = this.state
    const { choosedTopic, secretWordArr} = this.props
    return (
      <div className="main-game-container">
        {
        finishGame ?
        <Result result={result}/>
        :
        <GameInterface 
        choosedTopic={choosedTopic}
        secretWordArr={secretWordArr}
        error={error}
        handleClick={this.handleClick}
        handleChange={this.handleChange}
        handleKeyDown={this.handleKeyDown}/>
        }
      </div>
    )
  }
}