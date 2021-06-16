import React from 'react';
import CommentsContainer from '../containers/CommentsContainer';

const Movie = (props) => {
    // console.log(props)
    let movie = props.movies.filter(movie => movie.id == props.match.params.id)[0]
    console.log(movie)

    return (
        <div>
            <br/><img src={movie.image_link} alt='movie-poster'/><br/>
            <h2>{movie.title}</h2>
            <h4>Description:</h4> {movie.description}
            <p><b>Genre:</b> {movie.genre_name}</p>
            <p><b>Year Released:</b> {movie.year_released}</p>

           <b>Comments: </b>({movie.comments.length ? movie.comments.length : "None yet. Be the first to comment on this movie!"})<br/><br/>
          <CommentsContainer movie={movie}/>
        </div>
    )
}

export default Movie