export function fetchMovies() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/movies')
        .then(response => response.json())
        .then(movies => dispatch({
             type: 'FETCH_MOVIES',
             payload: movies
        }
        ))
    }
}