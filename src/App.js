import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./router"
import HeaderComponent from './components/HeaderComponent'

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Routes></Routes>
      </div>
    );
  }
}

export default App;
