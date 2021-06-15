export default function movieReducer(state = {movies: [], comments: [],}, action) {
    switch(action.type) {
        case 'FETCH_MOVIES':
            return {movies: action.payload}

        case 'ADD_MOVIE':
            return {...state, movies: [...state.movies, action.payload]}

        case 'ADD_COMMENT':
            debugger
            const comment = {content: action.comment.content, movieId: action.comment.movieId};
            return {
                ...state, comments: [...state.comments, comment]}

        case 'DELETE_COMMENT':
            const comments = state.comments.filter(comment => comment.id !== action.id)
                return {...state, comments}

        default:
            return state

    }
};