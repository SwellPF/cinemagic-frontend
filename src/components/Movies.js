import React from 'react';
import { Link } from 'react-router-dom';

const Movies = (props) => {
    return (   
        
        <div>
            {props.movies.map(movie =>
                <span key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                <br/></span>)}
        </div>
    )
}

export default Movies