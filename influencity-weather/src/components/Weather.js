import React, { Component } from 'react';

//import data from '../data/data.json';
import logo from '../cloudsIcon.png';


class Weather extends Component {
  
  componentDidMount (){
    this.getItems();
  }

  state = {
    data:''
  }

  getItems (){
    fetch('https://raw.githubusercontent.com/Influencity/job-offers/master/coding-test/weather-api-2019-04/almeria.json')
      .then( response => response.json())
      .then( response => {
          this.setState ({data: response})
      })
  }
  
  render (){
    const {list}=this.state.data
    console.log("Respuesta name", list)
    return (
      <div className="card ml-2 col-2 bg-light border-dark">
        <div className="row no-gutters">
          <div className="card-body text-left">
          {this.state.data.map((item, index) => {
            return (
              <div  key={index}>
                <h5 className="card-title"> {item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.sys.country}</h6>
                <p className="card-text">{item.main.temp} <span>ºC</span></p>
              </div>
          )} )}
           
          </div>
          <div className="col-md">
            <img src={logo} className="imageW" alt="weather"></img>
          </div>
        </div>
    </div>
    )

  }
}

export default Weather;