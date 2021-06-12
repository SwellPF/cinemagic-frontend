import React from 'react';
import CommentInput from '../components/CommentInput';
import Comments from '../components/Comments';

class CommentsContainer extends React.Component {

    render() {
        return (
            <div>
                <CommentInput movie={this.props.movie}/><br/>
                <Comments comments={this.props.movie && this.props.movie.commments}/>
            </div>
        )
    }
}

export default CommentsContainer