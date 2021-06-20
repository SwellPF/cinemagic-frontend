import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <Link to='/movies' style={{paddingRight: '10px'}}>Movies</Link>
            <Link to='/movies/new'style={{paddingRight: '10px'}}>Add Movie</Link>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default NavBar