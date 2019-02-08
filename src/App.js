import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './components/Header';
import Home from './components/Scenes/Home';
import Footer from './components/Footer';


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
