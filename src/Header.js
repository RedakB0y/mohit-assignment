import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
    return (
        <div className='header'>
            <ul className='headerMenu'>
                <li><a href="/" ><HomeIcon />Home</a></li>
                <li><a href="#category" ><CategoryIcon />Category</a></li>
                <li><a href="#about" ><InfoIcon />About</a></li>
                <li><a href="#contact" ><PhoneIcon />Contact</a></li>
            </ul>

        </div>
    )
}

export default Header;