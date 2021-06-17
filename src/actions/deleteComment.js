export const deleteComment = (comment) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/comments/${comment.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(comment => dispatch({type: 'DELETE_COMMENT', payload: comment}))
    }
}