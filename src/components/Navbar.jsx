import React from 'react'
import Login from './Login'
import Register from './register'

const Navbar = () => {
    return (
        <nav className='nav'>
            <h1>SightSeer👀</h1>
            <Login/>
            <Register/>
        </nav>
    )
}

export default Navbar
