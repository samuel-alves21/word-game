import { Component } from 'react';

import { getTopics } from '../../utils/getTopics'
import { Topics } from '../Topics';
import { setSecretWordUtils } from '../../utils/setSecretWordUtils';
import { GameSection } from '../GameSection';

import './styles.css';

class App extends Component {
  state =  {
    choosedTopic: '',
    topics: [],
    secretWord: '',
    secretWordArr: [],
  }

  setSecretWord = (e) => {
    const [secretWord, secretWordArr, choosedTopic] = setSecretWordUtils(e)
    this.setState({secretWord, secretWordArr, choosedTopic})
  }

  componentDidMount() {
    const topics = getTopics()
    this.setState({topics})
  }
  
  render() {
    const { topics, secretWord, secretWordArr, choosedTopic } = this.state
    return (
      <section className="general">
        <section className='main-container'>
          {secretWord ?
          <>
          <h1 className='text title1'>Adivinhe a palavra misteriosa</h1>
          < GameSection
          secretWordArr={secretWordArr}
          choosedTopic={choosedTopic}
          secretWord={secretWord}
          />
          </>
          :
          <>
          <h1 className='text title1'>Adivinhe a palavra misteriosa</h1>
          <Topics
          topics={topics}
          onClick={this.setSecretWord}
          />
          </>
          }
        </section>
      </section>
    )
  }
}

export default App;
