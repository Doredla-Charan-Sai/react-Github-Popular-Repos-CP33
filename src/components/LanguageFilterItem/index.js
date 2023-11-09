// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {detailsLang, onClickLang, activeOptionId} = props
  const {id, language} = detailsLang
  const onTake = () => {
    onClickLang(id)
  }
  const isActive = id === activeOptionId
  return (
    <li className="list-lang-item">
      <button
        type="button"
        onClick={onTake}
        className={isActive ? 'change-btn' : 'normal-btn'}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
