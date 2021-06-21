import React from 'react';
import { connect } from 'react-redux';
import { filterMovies } from '../actions/filterMovies';

class MovieFilter extends React.Component {
    state = {
        genre_id: ''
    }

    handleChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterMovies(this.state)
    }

        render() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <select class="bg-gray-100 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-0.5 pl-3 shadow bg-white rounded-lg h-6 w-40" name="genre_id" onChange={this.handleChange}>
                            <option value='' >All Movies</option>                        
                            <option value='1' >Action Adventure</option>                        
                            <option value='2'>Comedy</option>
                            <option value='3'>Science Fiction</option>
                            <option value='4'>Drama</option>
                            <option value='5'>Horror</option>
                            <option value='6'>Documentary</option>
                            <option value='7'>Fantasy</option>
                        </select>
                        <input class='rounded-full bg-blue-500 py-.5 px-4' type="submit" />
                    </form>
                </div>
            )
        }
    }

export default connect(null, {filterMovies})(MovieFilter);