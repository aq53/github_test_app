import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main/';
import {configStore} from './store/';
import {Provider} from 'react-redux';


class App extends Component {
  render() {
    return (
      <Provider store={configStore()} >
      <div className="App">
      <Main />
      </div>
      </Provider>
    );
  }
}

export default App;
