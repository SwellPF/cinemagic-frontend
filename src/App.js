import './App.css';
import React from 'react';
import MoviesContainer from './containers/MoviesContainer';
import { fetchMovies} from './actions/fetchMovies';
import { connect } from 'react-redux';
import Movies from './components/Movies';
import Movie from './components/Movie';
import MovieInput from './components/MovieInput';
import MovieEdit from './components/MovieEdit';
import About from './components/About';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';


class App extends React.Component {

  componentDidMount() {
    this.props.fetchMovies()
  }
  


  render () {
    if (this.props.loading) {
      return <div>Loading... Lights! Camera! Action!</div> 
    }
   
    return (
      <Router>
        <NavBar />
        <div className="App">
        <Switch><Route path='/about' component={About}/>
        <Route exact path='/movies/new' component={MovieInput}/>
        <Route exact path='/movies/:id/edit' render={(routerProps) => <MovieEdit {...routerProps} movies={this.props.movies}/>}/>
        <Route exact path='/movies/:id' render={(routerProps) => <Movie {...routerProps} movies={this.props.movies}/>}/>
        <Route exact path='/movies' render={(routerProps) => <Movies {...routerProps} movies={this.props.movies}/>}/>
        </Switch>
      </div></Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
