import React from 'react';
import axios from 'axios/dist/axios.min.js';


class Dreamcast extends React.Component {
  constructor(props){
    super(props)

  }
  state = {
    systemName:'',
    systemImg: ''
  }

  componentDidMount(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.get(proxyurl +'https://api-endpoint.igdb.com/platforms/23/', {
      headers: {
        "user-key": '371118ee5455adc31af2656760ffe051',
        Accept: "application/json",

      }
    }).then(response => {
      this.setState({systemName: response.data[0].name, systemImg: 'https://images.igdb.com/igdb/image/upload/t_720p/umc3lseoej3zuiht1sv9.jpg'})
      console.log(response.data[0]);
    })
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-12 systemHeader">
            {this.state.systemName}
            <div className="col-lg-12 systemImg">
              <img src={this.state.systemImg} alt="Dreamcast" />
            </div>
          </div>

        </div>
      </div>
    )
  }

}

export default Dreamcast;
