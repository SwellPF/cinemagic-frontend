import React from 'react';
import { Link } from 'react-router-dom';

const Movies = (props) => {
    return (
        <div>
            {props.movies.map(movie =>
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>)}
        </div>
    )
}

export default Movies