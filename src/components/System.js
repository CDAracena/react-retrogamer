import React from 'react';
import axios from 'axios/dist/axios.min.js';

class System extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    systemName: '',
    systemImg: '',
    systemIds: [
      {
        title: 'dreamcast',
        consoleId: '23'
      }, {
        title: 'nintendo64',
        consoleId: '4'
      }, {
        title: "playstation",
        consoleId: '7'
      }, {
        title: 'gamecube',
        consoleId: '21'
      }, {
        title: 'snes',
        consoleId: '19'
      }
    ],
    proxyUrl: "https://cors-anywhere.herokuapp.com/"
  }

  componentDidMount() {
    const currentSystem = this.state.systemIds.filter(system => system.title === this.props.match.params.systemId)
    axios.get(this.state.proxyUrl + `https://api-endpoint.igdb.com/platforms/${currentSystem[0].consoleId}/`, {
      headers: {
        "user-key": `${process.env.REACT_APP_IGDB_KEY}`,
        Accept: "application/json"
      }
    }).then(function(response) {
      this.setState({
        systemName: response.data.name,
        systemImg: response.data[0].logo.url.replace('thumb', '720p')
      })
    }.bind(this))
  }

  componentWillUnmount() {}
  render() {
    return (<div className="container">
      <div className="row">
        <div className="col-lg-12 systemHeader">
          {this.state.systemName}
          <div className="col-lg-12 systemImg">
            <img src={'https:' + this.state.systemImg} alt={this.state.systemName}/>
          </div>
        </div>

      </div>
      <div className="row">
        <div className="col-lg-4">
          <ul></ul>
        </div>
      </div>
    </div>)
  }
}
export default System;
