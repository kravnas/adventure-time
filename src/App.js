import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

import './App.css';

import Footer from './components/Footer';

import Home from './components/Scenes/Home';
import About from './components/Scenes/About';
import Activities from './components/Scenes/Activities';
import Contact from './components/Scenes/Contact';
import Article from './components/Scenes/Article';
import Error from './components/Scenes/Error';
import Navigation from './components/Navigation';

library.add(faTag)

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <div id="app">
          <Navigation />
          <Container fluid>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/activities" component={Activities}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/article" component={Article}/>
              <Route component={Error} />
            </Switch>
            <Footer />
          </Container>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
