import { React, Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import './app.scss';

import BootstrapComponent from './components/BootstrapComponent';

class App extends Component {
  constructor() {
    super();
    this.state = { core: 'ch' };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Music Junkie</h1>
          <h2>{this.state.core}</h2>
        </header>
        <BootstrapComponent />
      </div>
    );
  }
}

export default App;
