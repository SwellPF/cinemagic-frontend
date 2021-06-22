export const filterMovies = (genreId) => {
    debugger
    return (dispatch) => {
        dispatch({type: 'FILTER_MOVIES', payload: genreId})

    }
}