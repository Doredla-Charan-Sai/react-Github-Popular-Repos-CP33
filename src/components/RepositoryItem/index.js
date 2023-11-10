// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {detailsRepo} = props
  const {avatarUrl, issuesCount, starsCount, forksCount, name} = detailsRepo
  return (
    <li className="repo-list-item">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h1 className="name">{name}</h1>
      <div className="img-count-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icon"
        />
        <p className="count">{starsCount} stars</p>
      </div>
      <div className="img-count-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icon"
        />
        <p className="count">{forksCount} forks</p>
      </div>
      <div className="img-count-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icon"
        />
        <p className="count">{issuesCount} issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
