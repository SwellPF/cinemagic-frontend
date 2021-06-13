export const deleteComment = (commentId, movieId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/movies/${movieId}/comments/${commentId}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(movie => dispatch({type: 'DELETE_COMMENT', payload: movie}))
    }
}