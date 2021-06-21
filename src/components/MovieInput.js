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
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        debugger
        event.preventDefault();
        this.props.addMovie(this.state)
        this.props.history.push('/movies');
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
                    <input type='text' class="bg-gray-100 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10 shadow bg-white rounded-lg h-18" placeholder='Movie Title' value={this.state.title} name='title' onChange={this.handleChange}/><br/>
                    <label>Description:</label>
                    <input type='textarea' class="bg-gray-100 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10 shadow bg-white rounded-lg h-18" size="60" placeholder='Description' value={this.state.description} name='description' onChange={this.handleChange}/><br/>
                    <label>Genre:</label>
                    <select name="genre_id" onChange={this.handleChange}>
                        <option value='1' >Action Adventure</option>                        
                        <option value='2'>Comedy</option>
                        <option value='3'>Science Fiction</option>
                        <option value='4'>Drama</option>
                        <option value='5'>Horror</option>
                        <option value='6'>Documentary</option>
                        <option value='7'>Fantasy</option>
                    </select><br/>
                    <label>Year Released:</label>
                    <input type='text' class="bg-gray-100 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10 shadow bg-white rounded-lg h-18" placeholder='Year Released' value={this.state.year_released} name='year_released' onChange={this.handleChange}/><br/>
                    <label>Image URL:</label>
                    <input type='text' class="bg-gray-100 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10 shadow bg-white rounded-lg h-18" placeholder='Image URL' value={this.state.image_link} name='image_link' onChange={this.handleChange}/><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addMovie})(MovieInput)