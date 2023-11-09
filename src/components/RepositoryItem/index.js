// Write your code here
// eslint-disable-next-line import/no-extraneous-dependencies
import {BsStarFill} from 'react-icons/bs'
// eslint-disable-next-line import/no-extraneous-dependencies
import {TbGitFork} from 'react-icons/tb'
// eslint-disable-next-line import/no-extraneous-dependencies
import {AiFillExclamationCircle} from 'react-icons/ai'
import './index.css'

const RepositoryItem = props => {
  const {detailsRepo} = props
  const {avatarUrl, issuesCount, starsCount, forksCount, name} = detailsRepo
  return (
    <li className="repo-list-item">
      <img src={avatarUrl} alt="avatar" className="avatar" />
      <h1 className="name">{name}</h1>
      <div className="img-count-cont">
        <BsStarFill className="icon" />
        <p className="count">{starsCount} stars</p>
      </div>
      <div className="img-count-cont">
        <TbGitFork className="icon" />
        <p className="count">{forksCount} forks</p>
      </div>
      <div className="img-count-cont">
        <AiFillExclamationCircle className="icon" />
        <p className="count">{issuesCount} issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
