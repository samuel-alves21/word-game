import './styles.css'

export const Topics = ({topics, onClick}) => {
  return (
    <>
    <p className='text topic-p p'>Escolha um dos tópicos abaixo.</p>
    <div className="topics-container">
      { topics.map( topic => ( 
          <button className='button topic-button' onClick={ onClick }>{topic}</button>
        )) }
    </div>
    </>
  )
}