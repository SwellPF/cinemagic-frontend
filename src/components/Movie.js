import React from 'react';
import CommentsContainer from '../containers/CommentsContainer';

const Movie = (props) => {
    debugger
    console.log(props)

    let movie = props.movies.filter(movie => movie.id == props.match.params.id)[0]

    return (
        <div>
              <p>  You're in the Movie detail.</p>
                {/* {movie ? movie.title : null} */}
            <CommentsContainer movie={movie}/><br/>
            
        </div>
    )
}

export default Movie