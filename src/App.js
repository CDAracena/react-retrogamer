import React from 'react';
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import System from './components/System';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import axios from 'axios/dist/axios.min.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearchTerm = this.handleSearchTerm.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.setSearchTermGames = this.setSearchTermGames.bind(this);
  }

  state = {
    currentSearchTerm: '',
    searchTermIds: [],
    searchTermGames: []
  }

  handleSearchTerm(input) {
    this.setState({currentSearchTerm: input.target.value})
    return (
      <SearchResults/>
    )
  }

  handleSearchClick() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?search=${this.state.currentSearchTerm}`, {
      headers: {
        "user-key": `${process.env.REACT_APP_IGDB_KEY}`,
        Accept: "application/json"
      }
    }).then(function(response) {
      this.setState({searchTermIds: response.data })
      this.setSearchTermGames();
    }.bind(this))
  }

  setSearchTermGames(){
    this.state.searchTermIds.map(gameId => {
      axios.get(`https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/${gameId.id}/`, {
        headers: {
          "user-key": `${process.env.REACT_APP_IGDB_KEY}`,
          Accept: "application/json"
        }
      }).then(function(response){
        this.setState({searchTermGames: [...this.state.searchTermGames, response.data[0]]})
            console.log(this.state.searchTermGames);
      }.bind(this))
    })

  }

  render() {
    return (
      <Router>
      <div className="main-App-container container-fluid">
        <Nav searchTerm={this.handleSearchTerm} searchFunction={this.handleSearchClick}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/:systemId" render={(props) => <System {...props}/>}/>
          <Route path="/searchresults" component={SearchResults}/>
        </Switch>
      </div>
    </Router>)
  }
}

export default App;
