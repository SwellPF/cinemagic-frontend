export const addComment = (content) => {
    // debugger
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/comments`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(content)
        })
        .then(response => response.json())
        .then(comment => dispatch({type: 'ADD_COMMENT', payload: comment}))
    }
}