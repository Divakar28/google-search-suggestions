import {Component} from 'react'

import './index.css'

class SuggestionItem extends Component {
  onSelectElement = () => {
    const {suggestionItem, updateSearchInput} = this.props
    const {suggestion} = suggestionItem
    updateSearchInput(suggestion)
  }

  render() {
    const {suggestionItem} = this.props
    const {suggestion} = suggestionItem

    return (
      <li className="list-items" onClick={this.onSelectElement}>
        <p>{suggestion}</p>
        <img
          className="arrow-button"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </li>
    )
  }
}
export default SuggestionItem
