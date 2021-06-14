import React from 'react';
import {connect} from 'react-redux';
import {addComment} from '../actions/addComment';

class CommentInput extends React.Component {
    state = {
        content: ''
    }

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        });
    }

    handleSubmit = (event) => {
        debugger
        event.preventDefault();
        this.props.addComment({content: this.state.content, movie_id: this.props.movie.id})
        this.setState({
            content: '',
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add Comment:</label>
                    <input type='text' name='content' onChange={this.handleChange} value={this.state.content}/>
                    <input type='submit'/>
                </form>
            </div>
        );
    }
};

export default connect(null, {addComment})(CommentInput);