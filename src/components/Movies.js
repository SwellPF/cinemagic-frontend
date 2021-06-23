import React from 'react';
import { Link } from 'react-router-dom';

const Movies = (props) => {
    return (   
        
        <div class="grid grid-cols-3 gap-4">
            {props.movies.map(movie => {
            return (
                <div class="min-h-full bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  
                <div class="py-3 h-full sm:max-w-xl md:w-3/4 sm:mx-auto">
                  <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
                    <div class="h-30 overflow-visible w-1/2">
                        <img class="rounded-3xl shadow-lg" src={`${movie.image_link}`} alt=""/>
                    </div>
                    <div class="flex flex-col w-1/2 space-y-4">
                      <div class="flex justify-between items-start">
                        <h2 class="text-2xl font-bold hover:text-blue-500"><Link to={`/movies/${movie.id}`}>{movie.title}</Link></h2>
                      </div>
                      <div>
                        <div class="text-sm text-gray-400">{movie.genre_name}</div>
                        <div class="text-lg text-gray-800">{movie.year_released}</div>
                      </div>
                    </div>
              
                  </div>
                </div>
                
              </div>
            )           
            })}


             {/* this is what I had before, just a simple list */}
               {/* <span key={movie.id}> */}
                 {/* <Link to={`/movies/${movie.id}`}>{movie.title}</Link> */}
                 {/* <br/></span> */}

        </div>
    )
}

export default Movies