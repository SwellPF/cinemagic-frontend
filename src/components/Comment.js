import React from 'react';

class Comment extends React.Component {
    handleClick = () => {
        this.props.deleteComment(this.props.comment.id)
    }

    render() {
        return (
            <div>
                <li>
                    {this.props.comment.content}
                    <button onClick={this.handleClick}>Delete</button>
                </li>
            </div>
        );
    }
};

export default Comment;