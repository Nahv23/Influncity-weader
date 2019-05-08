import React from 'react';

import logo from '../logo.svg';


export default function Header (){

    return (
        <header className="navbar sm-6 mb-5">
          <img src={logo} className="App-logo" alt="logo" />
            <p> WEATHER IN: </p>
        </header>
    )
}


