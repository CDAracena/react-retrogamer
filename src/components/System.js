import React from 'react';
import axios from 'axios/dist/axios.min.js';
import GameList from './GameList';

class System extends React.Component {
  constructor(props) {
    super(props)

    this.getPlatform = this.getPlatform.bind(this);
    this.getPlatformGames = this.getPlatformGames.bind(this);
  }

  state = {
    systemName: '',
    systemImg: '',
    systemId: '',
    systemGamesIds: [],
    systemGames: [],
    systems: [
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

  getPlatform() {
    const currentSystem = this.state.systems.filter(system => system.title === this.props.match.params.systemId)
    axios.get(this.state.proxyUrl + `https://api-endpoint.igdb.com/platforms/${currentSystem[0].consoleId}/`, {
      headers: {
        "user-key": `${process.env.REACT_APP_IGDB_KEY}`,
        Accept: "application/json"
      }
    }).then(function(response) {

      let systemImage;
      if (currentSystem[0].title === 'nintendo64') {
        systemImage = response.data[0].versions[0].logo.url.replace('thumb', '720p')
      } else {
        systemImage = response.data[0].logo.url.replace('thumb', '720p')
      }
      this.setState({systemName: response.data[0].name, systemImg: systemImage, systemId: currentSystem[0].consoleId, systemGamesIds:response.data[0].games.slice(0, 25)})

      this.getPlatformGames();

    }.bind(this))
  }

  getPlatformGames(){
    this.state.systemGamesIds.map(gameId => {
      axios.get(this.state.proxyUrl + `https://api-endpoint.igdb.com/games/${gameId}/`, {
        headers: {
          "user-key": `${process.env.REACT_APP_IGDB_KEY}`,
          Accept: "application/json"
        }
      }).then(function(response){
        this.setState({systemGames: [...this.state.systemGames, response.data[0]]})
          console.log(this.state.systemGames)
      }.bind(this))
    })

     }

  componentDidMount() {
    this.getPlatform();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.systemId !== nextProps.match.params.systemId) {
      this.props.match.params.systemId = nextProps.match.params.systemId;
      this.getPlatform();
    }
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
          <GameList games={this.state.systemGames}/>
        </div>
      </div>
    </div>)
  }
}
export default System;
