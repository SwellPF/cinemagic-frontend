import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className='bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 h-10'>
            <Link to='/movies' className="align-middle" style={{paddingRight: '10px'}}>Movies</Link>
            <Link to='/movies/new'className="align-middle"style={{paddingRight: '10px'}}>Add Movie</Link>
            <Link to='/about' className="align-middle">About</Link>
        </div>
    )
}

export default NavBar