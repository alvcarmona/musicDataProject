import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import BootstrapComponent from './components/BootstrapComponent'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Music Junkie</h1>
        </header>
          <BootstrapComponent/>
      </div>
    );
  }
}

export default App;
