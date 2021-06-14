import React from 'react';

const Comments = (props) => {
    return (
        <div>
            {props.comments.map(comment =>
                <li key={comment.content}>
                </li>)}
        </div>
    )
}
    

export default Comments;