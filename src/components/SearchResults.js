import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchResults.css';


class SearchResults extends Component {
  constructor(props){
    super(props)
  }
  state = {
    searchTerm:'',
    searchResults: []
  }
  render() {
    return (
      <div className="search-results-container">
        Results
      </div>
    )
  }
}

export default SearchResults;
