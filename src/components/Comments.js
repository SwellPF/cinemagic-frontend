import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../actions/deleteComment';




const Comments = (props) => {
    // debugger
    const handleDelete = comment => {
        props.deleteComment(comment)
    }
    return (
        <div>
            {props.comments.map(comment =>
                <li key={comment.id}>{comment.content}
                <button onClick={()=>handleDelete(comment)}>Delete</button>
                </li>)}
        </div>
    )
}
    

export default connect(null, {deleteComment})(Comments)