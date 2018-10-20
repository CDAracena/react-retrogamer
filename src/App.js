import React from 'react';
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import System from './components/System';
import Home from './components/Home';
import axios from 'axios/dist/axios.min.js';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleSearchTerm = this.handleSearchTerm.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.getPlatform = this.getPlatform.bind(this)
    this.getPlatformGames = this.getPlatformGames.bind(this);
    this.makeAPICalls = this.makeAPICalls.bind(this);
  }

  state = {
    currentSearchTerm: '',
    consoleId: '',
    proxyUrl: "https://cors-anywhere.herokuapp.com/",
    systemName: '',
    systemImg: '',
    systemGameList: [],
  }

  getPlatform = () => {
    return axios.get(this.state.proxyUrl + 'https://api-endpoint.igdb.com/platforms/23/', {
      headers: {
        "user-key": '371118ee5455adc31af2656760ffe051',
        Accept: "application/json"
      }
    })
  }

  getPlatformGames = () => {
    return axios.get(this.state.proxyUrl + 'https://api-endpoint.igdb.com//games/1218', {
      headers: {
        "user-key": '371118ee5455adc31af2656760ffe051',
        Accept: "application/json"
      }
    })
  }

  makeAPICalls(){
      axios.all([this.getPlatform(), this.getPlatformGames()]).then(axios.spread(function(platform, games) {

        console.log("response1:" + JSON.stringify(platform.data[0].logo.url.replace('thumb', '720p')))
        this.setState({
          systemName: platform.data.name,
          systemImg: platform.data[0].logo.url.replace('thumb', '720p')
        })

      }.bind(this)))
  }

  handleSearchTerm(input) {
    this.setState({
      currentSearchTerm: input.target.value
    }, function() {})
  }
  handleSearchClick() {}

  render() {
    return (<Router>
      <div className="main-App-container container-fluid">
        <Nav searchTerm={this.handleSearchTerm} searchFunction={this.handleSearchClick}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/:id" component={System}/>

        </Switch>
      </div>

    </Router>)
  }
}

export default App;
