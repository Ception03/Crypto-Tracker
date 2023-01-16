import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaCoins className='icon' />
                <h1>Scry<span className='purple'>mpto</span></h1>
            </div>
        </Link>
    )
}

export default Navbar
