export const addComment = (content, movieId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/movies/${movieId}/comments`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(content)
        })
        .then(response => response.json())
        .then(movie => dispatch({type: 'ADD_COMMENT', payload: movie}))
    }
}