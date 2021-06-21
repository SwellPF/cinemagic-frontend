import './App.css';
import React from 'react';
import MoviesContainer from './containers/MoviesContainer';
import { fetchMovies} from './actions/fetchMovies';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchMovies()
  }
  
  handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading... Please wait!</div>
    } else {
      return <MoviesContainer />
    }
  }

  render () {
    return (
      <div className="App">
        {this.handleLoading()}
      </div>
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
