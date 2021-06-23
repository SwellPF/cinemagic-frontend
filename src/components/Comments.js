import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../actions/deleteComment';

const Comments = (props) => {
    const handleDelete = comment => {
        props.deleteComment(comment)
    }
    return (
        <div>
            {props.comments.map(comment =>
                <li key={comment.id}>{comment.content}{' '}
                <button class="rounded-md border border-red-700 hover:bg-red-500 py-.5 px-4" onClick={()=>handleDelete(comment)}>Delete</button>
                </li>)}
        </div>
    )
}
    
export default connect(null, {deleteComment})(Comments)