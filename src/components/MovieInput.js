import React from 'react';
import { connect } from 'react-redux';
import {addMovie} from '../actions/addMovie';

class MovieInput extends React.Component {

    state = {
        title: '',
        description: '',
        genre_id: '',
        year_released: '',
        image_link: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addMovie(this.state)
        this.setState({
            title: '',
            description: '',
            genre_id: '',
            year_released: '',
            image_link: '' 
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input type='text' placeholder='Movie Title' value={this.state.title} name='title' onChange={this.handleChange}/><br/>
                    <label>Description:</label>
                    <input type='text' placeholder='Description' value={this.state.description} name='description' onChange={this.handleChange}/><br/>
                    <label>Genre:</label>
                    <input type='text' placeholder='Genre' value={this.state.title} name='genre_id' onChange={this.handleChange}/><br/>
                    <label>Year Released:</label>
                    <input type='text' placeholder='Year Released' value={this.state.title} name='year_released' onChange={this.handleChange}/><br/>
                    <label>Image URL:</label>
                    <input type='text' placeholder='Image URL' value={this.state.title} name='image_link' onChange={this.handleChange}/><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addMovie})(MovieInput)