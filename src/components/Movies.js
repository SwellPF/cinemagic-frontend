import React from 'react';
import { Route, Link } from 'react-router-dom';
import Movie from './Movie'

class Movies extends React.Component {
    render() {
        const {movies} = this.props;
        const movieList = movies.map(movie => {
            return (
                <Movie
                    key={movie.id}
                    movie={movie}
                    />
            )
        });
        return (
            <ul>
                {movieList}
            </ul>
        )
    }
};

export default Movies