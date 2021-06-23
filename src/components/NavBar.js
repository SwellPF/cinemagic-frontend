import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className='bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 h-10 text-right'>
            <div className='text-left text-2xl m-2 align-baseline'><b>CineMagic: For People Who Love Movies!</b>
            <Link to='/movies' className="text-xl text-gray-100 align-baseline ml-96 hover:text-blue-700" style={{paddingRight: '25px'}}><b>Movies</b></Link>
            <Link to='/movies/new'className="text-xl text-gray-100 align-baseline hover:text-blue-700" style={{paddingRight: '25px'}}><b>Add Movie</b></Link>
            <Link to='/about' className="text-xl text-gray-100 align-baseline hover:text-blue-700" style={{paddingRight: '5px'}}><b>About</b></Link>
            </div>
        </div>
    )
}

export default NavBar