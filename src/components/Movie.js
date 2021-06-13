import React from 'react';
import CommentsContainer from '../containers/CommentsContainer';

const Movie = (props) => {
    console.log(props)
    let movie = props.movies.filter(movie => movie.id == props.match.params.id)[0]
    console.log(movie)

    return (
        <div>
            {movie ? movie.title : null}
            <CommentsContainer movie={movie}/>
        </div>
    )
}

export default Movie