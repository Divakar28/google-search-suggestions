import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class Home extends Component {
  state = {userInput: ''}

  updateSearchInput = suggestion => {
    this.setState({userInput: suggestion})
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInput} = this.state

    const {suggestionsList} = this.props

    const filterList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(userInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <br />
        <div className="search-container shadow">
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
          />

          <input
            type="search"
            className="search-bar"
            placeholder="Search Google"
            onChange={this.onChangeInput}
          />
          <ul>
            {filterList.map(each => (
              <SuggestionItem
                suggestionItem={each}
                key={each.id}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
