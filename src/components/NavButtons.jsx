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
					<button className='btn bouncy' onClick={props.getTrips}>
						View All
					</button>
					<button
						className='btn bouncy'
						style={{
							animationDelay: '0.07s',
							backgroundImage: "url('https://i.ibb.co/CW5Wvry/buttonpng.png')",
							backgroundSize: 'auto',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							borderRadius: '5px',
							border: 'none',
							outline: 'none',
							cursor: 'pointer',
							height: '100px',
						}}
						name='North America'
						onClick={getContinent}>
						North America
					</button>

					<button
						className='btn bouncy'
						style={{ animationDelay: '0.14s' }}
						name='South America'
						onClick={getContinent}>
						South America
					</button>
					<button
						className='btn bouncy'
						style={{ animationDelay: '0.21s' }}
						name='Asia'
						onClick={getContinent}>
						Asia
					</button>
					<button
						className='btn bouncy'
						style={{ animationDelay: '0.28s' }}
						name='Europe'
						onClick={getContinent}>
						Europe
					</button>
					<button
						className='btn bouncy'
						style={{ animationDelay: '0.35s' }}
						name='Australia'
						onClick={getContinent}>
						Australia
					</button>
					<button
						className='btn bouncy'
						onClick={props.handleCreateTripVisible}
						style={{ animationDelay: '0.42s' }}>
						Add Trip
					</button>
				</nav>
			</div>
		);
}

export default NavButtons
