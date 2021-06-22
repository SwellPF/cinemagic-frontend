import React from 'react';
import {connect} from 'react-redux';
import MovieFilter from '../components/MovieFilter';
import {Link} from 'react-router-dom';


class MoviesContainer extends React.Component {

    render () {
        return (
            <div>
                <MovieFilter />
                {this.props.movies.map(movie =>
                <span key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                {/* <br/> */}
                {/* <img src={`${movie.image_link}`} alt={movie.title}/> */}
                {/* {' - '}{movie.genre_name}{' - '}{movie.year_released}<br/> */}
                <br/></span>
                )}


                {/* <Movies movies={this.props.movies}/> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.filter ? state.filteredMovies : state.movies
    }
}


export default connect(mapStateToProps)(MoviesContainer)