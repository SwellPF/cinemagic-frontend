import React from 'react';
import CommentInput from '../components/CommentInput';
import Comments from '../components/Comments';
import {connect} from 'react-redux';

class CommentsContainer extends React.Component {
// debugger
    render() {
        return (
            <div>
                <CommentInput movie={this.props.movie}/><br/>
                <Comments comments={this.props.movie.comments}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: comment => dispatch({type: 'ADD_COMMENT', comment}),
})

export default connect(null, mapDispatchToProps)(CommentsContainer);

CommentsContainer.defaultProps = {
    user_id: 1
  }