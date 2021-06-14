import React from 'react';
import CommentInput from '../components/CommentInput';
import Comments from '../components/Comments';
import {connect} from 'react-redux';

class CommentsContainer extends React.Component {

    render() {
        return (
            <div>
                <CommentInput movie={this.props.movie}/><br/>
                <Comments comments={this.props.movie && this.props.movie.commments} deleteComment={this.deleteComment}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: comment => dispatch({type: 'ADD_COMMENT', comment}),
    deleteComment: id => dispatch({type: 'DELETE_COMMENT', id}),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);

CommentsContainer.defaultProps = {
    user_id: 1
  }