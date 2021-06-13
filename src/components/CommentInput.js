import React from 'react';

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
        event.preventDefault();
        this.props.addComment({content: this.state.content, movieId: this.props.movieId})
        this.setState({
            content: '',
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add Comment:</label>
                    <input type='text' onChange={this.handleChange} value={this.state.content}/>
                    <input type='submit'/>
                </form>
            </div>
        );
    }
};

export default CommentInput;