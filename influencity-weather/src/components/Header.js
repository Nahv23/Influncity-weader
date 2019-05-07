import React from 'react';

import logo from '../logo.svg';


export default function Header (){

    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p> Weather In: </p>
            <a className="App-link" target="_blank" rel="noopener noreferrer"></a>
        </header>
        
    )
}


