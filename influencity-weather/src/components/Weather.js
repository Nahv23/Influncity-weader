import React, { Component } from 'react';

import logo from '../cloudsIcon.png';

class Weather extends Component {

  state={
    data:{
      city:[]
    },
    temp:0,
    cities: ["almeria", "granada", "malaga", "jaen", "cordoba", "sevilla", "huelva", "cadiz"]
  }

  
  componentDidMount (){
    this.state.cities.map(city => {
      this.getItems(city);
      this.getTempInCelsius();
    })

  }

  getItems (city){
    let url = "https://raw.githubusercontent.com/Influencity/job-offers/master/coding-test/weather-api-2019-04/"+city+".json";
    fetch(url)
      .then( response => response.json())
      .then( response => {
        this.setState({
          data: {
            ...this.state.data,
            [city]: response.list
          }
        })
      })
}

  getTempInCelsius(kelvin){
    return Math.round(kelvin-273.15)
}
  
  render (){
    console.log("QUE ES- >", this.state.data, "TIPO-> ", typeof(this.state.data))
    const {data} =this.state
    return (
      <div className="card ml-2 col-3 bg-light border-dark">
        <div className="row no-gutters d-flex">
          <div className="card-body text-left">
          {data.city.map((item, index) => {
            return (
              <div  key={index}>
                <h4 className="card-title"> {item.name}</h4>
                <h5 className="card-subtitle mb-2 text-muted">{item.sys.country}</h5>
                <p className="card-text">{this.getTempInCelsius(item.main.temp)} <span>ºC</span></p>
              </div>
          )} )}
           
          </div>
          <div className="col-md mr-2">
            <img id="imagen" src={logo} className="imageW" alt="weather"></img>
          </div>
        </div>
    </div>
    )

  }
}

export default Weather;