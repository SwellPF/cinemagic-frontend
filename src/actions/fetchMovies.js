export const fetchMovies = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_MOVIES'})
        fetch('http://localhost:3000/api/v1/movies')
        .then(response => { 
            return response.json()})
        .then(movies => {dispatch({
             type: 'FETCH_MOVIES',
             payload: movies })
        })
    }
}