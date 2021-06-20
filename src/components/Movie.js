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
{/* //            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//   <div class="md:flex">
//     <div class="md:flex-shrink-0">
//       <img class="h-48 w-full object-cover md:w-48" src="https://static.metacritic.com/images/products/movies/8/a9dea7cda65680f0c8b2875d4dd5a465-250h.jpg" alt='movie-poster'></img>
//     </div>
//     <div class="p-8">
//       <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{movie.title}</div>
//       <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{movie.genre_name}</a>
//       <p class="mt-2 text-gray-500">{movie.description}</p>
//     </div>
//   </div>
// </div> 
// </div>       
             */}
            
            <br/><img src={movie.image_link} alt='movie-poster'/><br/>
            <h2>{movie.title}</h2>
            <h4>Description:</h4> {movie.description}
            <p><b>Genre:</b> {movie.genre_name}</p>
            <p><b>Year Released:</b> {movie.year_released}</p>
            <b>Comments: </b>({movie.comments.length ? movie.comments.length : "None yet. Be the first to comment on this movie!"})<br/><br/>        
            <Link to={`/movies/${movie.id}/edit`}> <button class="bg-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">Edit Movie</button></Link><br/><br/>
        <CommentsContainer movie={movie}/>
        </div>
    )
}

export default connect(null, {editMovie})(Movie);