import React from 'react';
import Comment from './Comment';
import {deleteComment} from '../actions/deleteComment';

class Comments extends React.Component {
    render() {
        const {comments, movieId, deleteComment} = this.props;
        const associatedComments = comments.filter(comment => comment.movieId === movieId);

        const commentList = associatedComments.map((comment,index) => {
            return <Comment
                key={index}
                comment={comment}
                />
        });

        return(
            <div><ul>
                {commentList}
                </ul>
            </div>
        );
    }
};

export default Comments;