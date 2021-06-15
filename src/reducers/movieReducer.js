export default function movieReducer(state = {movies: [], comments: [],}, action) {
    switch(action.type) {
        case 'FETCH_MOVIES':
            return {movies: action.payload}

        case 'ADD_MOVIE':
            return {...state, movies: [...state.movies, action.payload]}

        case 'ADD_COMMENT':
            debugger
            const movies = state.movies.map(movie => {
                if (movie.id === action.payload.movie_id) {
                    return action.payload
                } else {
                    return movie
                }
            })
            return {...state, movies: movies}


        // case 'DELETE_COMMENT':
        //     const comments = state.comments.filter(comment => comment.id !== action.id)
        //         return {...state, comments}

        default:
            return state

    }
};