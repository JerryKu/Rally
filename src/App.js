import React, { Component } from 'react';
import logo from './logo.svg';
import MapContainer from './components/activityMap.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer/>
      </div>
    );
  }
}

export default App;
