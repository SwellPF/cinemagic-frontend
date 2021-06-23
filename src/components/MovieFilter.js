import React from 'react';
import { connect } from 'react-redux';
import { filterMovies } from '../actions/filterMovies';

class MovieFilter extends React.Component {
    state = {
        genre_id: ''
    }

    handleChange = (event) => {
        // debugger
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.filterMovies(this.state)
    }

        render() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label><b>Choose a movie category (or All Movies):  </b></label>
                        <select className="border border-gray-300" name="genre_id" onChange={this.handleChange}>
                            <option value='' >All Movies</option>                        
                            <option value='1' >Action Adventure</option>                        
                            <option value='2'>Comedy</option>
                            <option value='3'>Science Fiction</option>
                            <option value='4'>Drama</option>
                            <option value='5'>Horror</option>
                            <option value='6'>Documentary</option>
                            <option value='7'>Fantasy</option>
                        </select>
                        <input className="rounded-md border border-gray-500 hover:bg-blue-500 py-.5 px-4" type="submit" />
                    </form>
                </div>
            )
        }
    }

export default connect(null, {filterMovies})(MovieFilter);