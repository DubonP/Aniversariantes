import './App.css';
import React, { Component } from 'react';
import Header from './components/header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
      return (
          <div>
          <Header />
          <Body />  
          <Footer />                      
          </div>
      );
  }
}

export default App;
