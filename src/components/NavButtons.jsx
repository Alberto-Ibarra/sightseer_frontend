import React from 'react'
import axios from 'axios'

const NavButtons = (props) => {

    const getContinent = (e) => {
        axios.get(`https://sightseer-backend.onrender.com/sights/${e.target.name}`).then((res)=>{
            props.setTrips(res.data)
        })
    }

    return (
        <div>
            <nav className='navBtn'>
                <button className='btn' onClick={props.getTrips}>View All</button>
                <button className='btn' name='North America' onClick={getContinent}>North America</button>
                <button className='btn' name='South America' onClick={getContinent}>South America</button>
                <button className='btn' name='Asia' onClick={getContinent}>Asia</button>
                <button className='btn' name='Europe' onClick={getContinent}>Europe</button>
                <button className='btn' name='Australia' onClick={getContinent}>Australia</button>
                <button className='btn'>Add Trip</button>
            </nav>
        </div>
    )
}

export default NavButtons
