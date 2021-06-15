export const deleteComment = (commentId, movieId) => {

return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/comments`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify(content)
    })
    .then(response => response.json())
    .then(movie => dispatch({type: 'DELETE_COMMENT', payload: content}))