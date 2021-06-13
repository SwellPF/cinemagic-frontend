import React from 'react';
import CommentsContainer from '../containers/CommentsContainer';

class Movie extends React.Component {

    render() {
        const {movie} = this.props;

        return(
            <div>
            <li>{movie.title}
            <CommentsContainer /></li>
            </div>
        );
    }
;}

export default Movie