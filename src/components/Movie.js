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
        <div><div class="grid grid-cols-3 gap-4 py-6">   
            <div className='col-span-1 mx-auto'><img src={movie.image_link} alt='movie-poster'/></div>
            <div className='col-span-2'>
                <h2 className='text-left text-blue-700 font-bold text-3xl'>{movie.title}</h2>
                <h4 className='text-left'><b>Description:</b></h4> <p className='text-left'>{movie.description}</p>
                <p className='text-left'><b>Genre:</b> {movie.genre_name}</p>
                <p className='text-left'><b>Year Released:</b> {movie.year_released}</p>
                <p className='text-left'><b>Comments: </b>({movie.comments.length ? movie.comments.length : "None yet. Be the first to comment on this movie!"})</p><br/><br/>        
            <Link to={`/movies/${movie.id}/edit`}> <button className="rounded-md border border-blue-700 hover:bg-blue-500 py-.5 px-4">Edit Movie</button></Link></div><br/>
        </div><hr/><br/>
        <CommentsContainer movie={movie}/>
    </div>
    )
}

export default connect(null, {editMovie})(Movie);