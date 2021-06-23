import React from 'react';
import CommentsContainer from '../containers/CommentsContainer';
import { editMovie } from '../actions/editMovie';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Movie = (props) => {
    let movie = props.movies.filter(movie => movie.id == props.match.params.id)[0]
    console.log(movie)
    
    // debugger
    return (
        <div>   
            <div className='content-center'><img src={movie.image_link} alt='movie-poster'/></div><br/>
            <h2 className='text-left text-blue-700 font-bold text-3xl'>{movie.title}</h2>
            <h4><b>Description:</b></h4> {movie.description}
            <p><b>Genre:</b> {movie.genre_name}</p>
            <p><b>Year Released:</b> {movie.year_released}</p>
            <b>Comments: </b>({movie.comments.length ? movie.comments.length : "None yet. Be the first to comment on this movie!"})<br/><br/>        
            <Link to={`/movies/${movie.id}/edit`}> <button className="rounded-md border border-blue-700 hover:bg-blue-500 py-.5 px-4">Edit Movie</button></Link><br/><br/>
        <CommentsContainer movie={movie}/>
        </div>
    )
}

export default connect(null, {editMovie})(Movie);