import React from 'react';
import { connect } from 'react-redux';
import { editMovie } from '../actions/editMovie';


class MovieEdit extends React.Component {
    
    constructor(props){
        super(props)
        this.movie = props.movies.filter(movie => movie.id == props.match.params.id)[0]
        this.state = this.movie
    }
    
    
        handleChange = (event) => {
            console.log(event.target.name)
            console.log(event.target.value)
            this.setState({
                [event.target.name]: event.target.value
            })
        }
        
        handleSubmit = (event) => {
            // debugger
            event.preventDefault();
            this.props.editMovie(this.state)
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
            // debugger
            return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <b>Editing Existing Movie</b><br/>
                    <img src={`${this.state.image_link}`} alt='movie poster' />
                    <label><b>Title:  </b></label>
                    <input className="bg-gray-100 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-1/2 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-0.5 pl-3 shadow bg-white rounded-lg h-18" type='text' placeholder='Movie Title' value={this.state.title} name='title' onChange={this.handleChange}/><br/>
                    <br/><label><b>Description:  </b></label>
                    <input className="bg-gray-100 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-1/2 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-0.5 pl-3 shadow bg-white rounded-lg h-18" type='textarea' size="60" placeholder='Description' value={this.state.description} name='description' onChange={this.handleChange}/><br/>
                    <br/><label><b>Genre:  </b></label>
                    <select className="border border-gray-300" name="genre_id" onChange={this.handleChange} value={this.state.genre_id}>
                        <option value='1' >Action Adventure</option>                        
                        <option value='2'>Comedy</option>
                        <option value='3'>Science Fiction</option>
                        <option value='4'>Drama</option>
                        <option value='5'>Horror</option>
                        <option value='6'>Documentary</option>
                        <option value='7'>Fantasy</option>
                    </select><br/>
                    <br/><label><b>Year Released:  </b></label>
                    <input className="bg-gray-100 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-1/2 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-0.5 pl-3 shadow bg-white rounded-lg h-18" type='text' placeholder='Year Released' value={this.state.year_released} name='year_released' onChange={this.handleChange}/><br/>
                    <br/><label><b>Image URL:  </b></label>
                    <input className="bg-gray-100 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-1/2 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-0.5 pl-3 shadow bg-white rounded-lg h-18" type='text' placeholder='Image URL' value={this.state.image_link} name='image_link' onChange={this.handleChange}/><br/>
                    <br/><input className="rounded-md border border-blue-700 hover:bg-blue-500 py-.5 px-4" type='submit'/>
                </form>
            </div>
        )
    }
    
    
}

export default connect(null, {editMovie})(MovieEdit)