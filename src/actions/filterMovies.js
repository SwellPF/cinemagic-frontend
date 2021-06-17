export const filterMovies = (genreId) => {
    return (dispatch) => {
        dispatch({type: 'FILTER_MOVIES', payload: genreId})

    }
}