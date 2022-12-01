import './styles.css'

export const Result = ({result}) => {
  return (
    <div className="results">
      <h4 className='results-title'>{result.title}</h4>
      <p className='results-body'>{result.body}</p>
    </div>
  )
}