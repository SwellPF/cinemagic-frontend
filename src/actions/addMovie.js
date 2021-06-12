export const addMovie = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/movies', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(movie => dispatch({type: 'ADD_MOVIE', payload: movie}))
    }
}