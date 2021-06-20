import './App.css';
import React from 'react';
import MoviesContainer from './containers/MoviesContainer';



class App extends React.Component {
  
  render () {
    return (
      <div className="App">
        <MoviesContainer />
      </div>
    );
  }
}

export default App;
