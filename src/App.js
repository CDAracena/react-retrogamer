import React from 'react';
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'axios/dist/axios.min.js'
import './index.css';


class App extends React.Component {
  constructor(props){
    super(props)

    this.handleSearchTerm = this.handleSearchTerm.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }


  state = {
    currentSearchTerm: ''
  }


  handleSearchTerm(input){
    this.setState({currentSearchTerm: input.target.value}, function(){

    })
  }
handleSearchClick(){
  console.log(this.state.currentSearchTerm);
}

  render(){
    return (
      <div className="main-App-container container-fluid">

        <Nav searchTerm={this.handleSearchTerm} searchFunction={this.handleSearchClick}/>

      </div>
    )
  }
}

export default App;
