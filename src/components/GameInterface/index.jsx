import { InvalidMessenger } from "../InvalidMessenger"
import { SecretWord } from "../SecretWord"

import './styles.css'

export const GameInterface = ({choosedTopic, secretWordArr, error, handleChange, handleKeyDown,handleClick}) => { 
  return (
    <div className='game-container'>
        <p className="game-section-p">
          Tópico escolhido:  
          <span className="choosed-topic">  {choosedTopic}</span>
        </p>
        <div className='word-container'>
          {secretWordArr.map( letter => (
            <SecretWord letter={letter}/>
          ))}
        </div>
        <InvalidMessenger erro={ error }/>
        <p className="topic-p letter-p">Escolha uma letra</p>
        <div className="submit-div">
          <input 
          className='letter-input' 
          type="text" 
          onChange={handleChange} 
          onKeyDown={handleKeyDown} 
          maxLength='1' 
          />
          <button className="button game-btn" onClick={handleClick}>ok</button>
        </div>
      </div>
  )

}
        