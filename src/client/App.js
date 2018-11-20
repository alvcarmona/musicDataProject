import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import './app.scss';
import { ApolloProvider } from 'react-apollo';
import client from './middleware/apollo';

import BootstrapComponent from './components/BootstrapComponent';
/*
*/
const App = () => (
  <div className="App">
    <ApolloProvider client={client}>
      <header className="App-header">
        <h1 className="App-title">Music Data</h1>
      </header>
      <BootstrapComponent />
    </ApolloProvider>
  </div>
);

export default App;
