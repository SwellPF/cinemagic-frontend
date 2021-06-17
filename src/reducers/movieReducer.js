export default function movieReducer(state = {movies: [], filteredMovies: [], filter: '', comments: [],}, action) {
    switch(action.type) {
        case 'FETCH_MOVIES':
            return {movies: action.payload}

        case 'ADD_MOVIE':
            return {...state, movies: [...state.movies, action.payload]}

        case 'ADD_COMMENT':
            const movies = state.movies.map(movie => {
                // debugger
                 if (movie.id === action.payload.movie_id) {
                    return {...movie, comments: [...movie.comments, action.payload]}
                } else {
                    return movie
                }
            })
            return {...state, movies: movies}


        case 'DELETE_COMMENT':

            const updatedMovies = state.movies.map(movie => {
                if (movie.id === action.payload.movie_id) {
                    return {...movie, comments: movie.comments.filter(comment => comment.id !== action.payload.id)}
                } else {
                    return movie
                }
            })
            // const updatedMovies = state.movies.map(movie => movie.id === action.payload.movie_id) ? {...movie, comments: movie.comments.filter(comment => comment.id !== action.payload.id)} : movie
         
            return {...state, movies: updatedMovies}


                

        case 'FILTER_MOVIES':
        debugger    
        const filteredMovies = state.movies.filter(movie => movie.genre_id == action.payload.genre_id)
                return {...state, filteredMovies, filter: action.payload.genre_id ? action.payload : ''}


        default:
            return state

    }
};