export default function movieReducer(state = {movies: []}, action) {
    switch(action.type) {
        case 'FETCH_MOVIES':
            return {movies: action.payload}

        case 'ADD_MOVIE':
            return {...state, movies: [...state.movies, action.payload]}

        default:
            return state

    }
}