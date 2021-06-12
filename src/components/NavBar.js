import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <Link to='/movies' style={{paddingRight: '10px'}}>Movies</Link>
            <Link to='/movies/new'>Add Movie</Link>
        </div>
    )
}

export default NavBar