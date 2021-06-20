export const editMovie = (data) => {
    return (dispatch) => {
        console.log(data)
        // debugger
        fetch(`http://localhost:3000/api/v1/movies/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(movie => dispatch({type: 'EDIT_MOVIE', payload: movie}))
    }
}