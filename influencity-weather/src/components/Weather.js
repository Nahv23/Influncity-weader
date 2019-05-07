import React, { Component } from 'react';


class Weather extends Component {

render (){
  return (
    <div className="card mx-2">
    <div className="card-body text-left">
      <h5 className="card-title">ALMERIA (list - id)</h5>
      <h6 className="card-subtitle mb-2 text-muted">Spain (list-sys-country)</h6>
      <p className="card-text">xºC Pasar de F a C (list-main-temp)</p>
    </div>
  </div>
  )

}
}

export default Weather;