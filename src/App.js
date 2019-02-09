import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'


import './App.css';

import Header from './components/Header';
import Home from './components/Scenes/Home';
import Footer from './components/Footer';
import Buttons from './components/Button';

library.add(faTag)

class App extends Component {
  render() {
    return (
      
      <React.Fragment>
        <Header/>
        <div className="container-fluid">    
          <Home/>
          <Footer/>
        </div>
      </React.Fragment>

    );
  }
}

export default App;
