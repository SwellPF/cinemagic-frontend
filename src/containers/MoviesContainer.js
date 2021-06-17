import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {fetchMovies} from '../actions/fetchMovies';
import Movies from '../components/Movies';
import Movie from '../components/Movie';
import MovieInput from '../components/MovieInput';
import NavBar from '../components/NavBar';
import MovieFilter from '../components/MovieFilter';

class MoviesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchMovies()
    }

    render () {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route path='/movies/new' component={MovieInput}/>
                    <Route path='/movies/:id' render={(routerProps) => <Movie {...routerProps} movies={this.props.movies}/>}/>
                    <Route path='/movies' render={(routerProps) => <Movies {...routerProps} movies={this.props.movies}/>}/>
                </Switch>
                <MovieFilter />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.filter ? state.filteredMovies : state.movies
    }
}


export default connect(mapStateToProps, {fetchMovies})(MoviesContainer)