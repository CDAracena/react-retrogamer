import React from 'react';
import axios from 'axios/dist/axios.min.js';


class Dreamcast extends React.Component {
  constructor(props){
    super(props)

this.getPlatform = this.getPlatform.bind(this)
this.getPlatformGames = this.getPlatformGames.bind(this);
  }
  state = {
    proxyUrl: "https://cors-anywhere.herokuapp.com/",
    systemName:'',
    systemImg: '',
    systemGameList:[]
  }

  getPlatform = ()=> {
    return axios.get(this.state.proxyUrl +'https://api-endpoint.igdb.com/platforms/23/', {
      headers: {
        "user-key": '371118ee5455adc31af2656760ffe051',
        Accept: "application/json",

      }
    })
  }

  getPlatformGames = ()=> {
    return axios.get(this.state.proxyUrl +'https://api-endpoint.igdb.com//games/1218', {
      headers: {
        "user-key": '371118ee5455adc31af2656760ffe051',
        Accept: "application/json",
      }
  })
}

  componentDidMount(){
     axios.all([this.getPlatform(), this.getPlatformGames()]).then(axios.spread(function(platform, games){

      console.log("response1:" + JSON.stringify(platform.data[0].logo.url.replace('thumb', '720p')))
      this.setState({systemName: platform.data.name, systemImg: platform.data[0].logo.url.replace('thumb', '720p')})

    }.bind(this)))
  }





componentWillUnmount() {

}
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-12 systemHeader">
            {this.state.systemName}
            <div className="col-lg-12 systemImg">
              <img src={'https:' + this.state.systemImg} alt="Dreamcast" />
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-lg-4">
            <ul></ul>
          </div>
        </div>
      </div>
    )
  }

}


export default Dreamcast;
