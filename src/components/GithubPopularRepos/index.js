import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    activeOption: languageFiltersData[0].id,
    apiStatus: apiStatusConstants.initial,
    getList: [],
  }

  componentDidMount() {
    this.getAPICall()
  }

  onSelect = uniqueId => {
    this.setState({activeOption: uniqueId}, this.getAPICall)
  }

  getAPICall = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {activeOption} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeOption}`

    const response = await fetch(url)

    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.popular_repos.map(item => ({
        id: item.id,
        name: item.name,
        issuesCount: item.issues_count,
        forksCount: item.forks_count,
        starsCount: item.stars_count,
        avatarUrl: item.avatar_url,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        getList: updatedData,
      })
    } else if (response.status === 401) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderCases = () => {
    const {apiStatus} = this.setState
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return (
          <div className="failure-cont">
            <img
              className="failure-img"
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
            />
            <h1 className="failure-txt">Something went wrong</h1>
          </div>
        )
      case apiStatusConstants.success:
        return this.renderSuccessList()
      default:
        return this.renderSuccessList()
    }
  }

  renderSuccessList = () => {
    const {getList} = this.state
    return (
      <ul className="success-list">
        {getList.map(listItem => (
          <RepositoryItem key={listItem.id} detailsRepo={listItem} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {activeOption, apiStatus} = this.state
    console.log(apiStatus)
    return (
      <div className="bg-cont">
        <h1 className="main-head">Popular</h1>
        <ul className="btn-list-cont">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              key={eachItem.id}
              onClickLang={this.onSelect}
              detailsLang={eachItem}
              activeOptionId={activeOption}
            />
          ))}
        </ul>
        {this.renderCases()}
      </div>
    )
  }
}
export default GithubPopularRepos
