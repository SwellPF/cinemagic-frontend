import React from 'react';
import CommentsContainer from '../containers/CommentsContainer';

const Movie = (props) => {
    console.log(props)

    let movie = props.movies.filter(movie => movie.id === props.match.params.id)[0]

    return (
        <div>
            <h2>
                {movie ? movie.title : null}
            </h2>
            <CommentsContainer movie={movie}/><br/>
            
        </div>
    )
}

export default Movie