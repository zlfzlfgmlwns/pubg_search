import React, { Component } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';

class App extends Component {

  componentDidMount(){
  }
  render() {
    return (
      <div className="App">
        <SearchInput/>
      </div>
    );
  }
}

export default App;
