import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Header />
    </header>

    <div className="content">
      <Routes />
    </div>
  </div>
);

export default App;
