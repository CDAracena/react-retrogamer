import React from 'react';
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'axios/dist/axios.min.js'
import './index.css';
import System from './components/System';
import Home from './components/Home';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleSearchTerm = this.handleSearchTerm.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  state = {
    currentSearchTerm: ''
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
          <Route path="/dreamcast" component={Dreamcast}/>

        </Switch>
      </div>

    </Router>)
  }
}

export default App;
