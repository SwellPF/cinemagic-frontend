import React from 'react';
import {connect} from 'react-redux';
import {addComment} from '../actions/addComment';

class CommentInput extends React.Component {
    state = {
        user_id: 1,
        content: ''
    }

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        });
    }

    handleSubmit = (event) => {
        // debugger
        event.preventDefault();
        this.props.addComment({content: this.state.content, movie_id: this.props.movie.id, user_id: this.state.user_id})
        this.setState({
            content: '',
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add Comment:</label>
                    <input class="bg-gray-100 focus:border-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10 shadow bg-white rounded-lg h-18" type='text' size='60' name='content' onChange={this.handleChange} value={this.state.content}/>
                    <input type='submit'/>
                </form>
            </div>
        );
    }
};

export default connect(null, {addComment})(CommentInput);