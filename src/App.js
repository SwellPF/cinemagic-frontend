import './App.css';
import React from 'react';
import MoviesContainer from './containers/MoviesContainer';
import {fetchMovies} from './actions/fetchMovies';
import {connect} from 'react-redux';



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
