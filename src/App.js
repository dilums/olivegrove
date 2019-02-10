import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Router from './Router';
import Footer from './components/layouts/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Router/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
