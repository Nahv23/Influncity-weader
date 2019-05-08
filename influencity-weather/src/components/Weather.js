import React, { Component } from 'react';

//import data from '../data/data.json';
import logo from '../cloudsIcon.png';


class Weather extends Component {
  
  // constructor(){
  //   super()
  //   this.state = {
  //     data:[]
  //   }
  // }

  state={
    data:[],
    temp:0
  }
  
  componentDidMount (){
    this.getItems();
    this.getTempInCelsius();
  }

  getItems (){
    fetch('https://raw.githubusercontent.com/Influencity/job-offers/master/coding-test/weather-api-2019-04/almeria.json')
      .then( response => response.json())
      .then( response => {
          this.setState ({data: response.list})
      })
  }

  getTempInCelsius(kelvin){
    return Math.round(kelvin-273.15)
}
  
  render (){
    return (
      <div className="card ml-2 col-3 bg-light border-dark">
        <div className="row no-gutters">
          <div className="card-body text-left">
          {this.state.data.map((item, index) => {
            return (
              <div  key={index}>
                <h4 className="card-title"> {item.name}</h4>
                <h5 className="card-subtitle mb-2 text-muted">{item.sys.country}</h5>
                <p className="card-text">{this.getTempInCelsius(item.main.temp)} <span>ºC</span></p>
              </div>
          )} )}
           
          </div>
          <div className="col-md mr-2">
            <img src={logo} className="imageW" alt="weather"></img>
          </div>
        </div>
    </div>
    )

  }
}

export default Weather;