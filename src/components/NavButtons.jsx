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
					<button
						className='btn bouncy'
						style={{
							animationDelay: '0.07s',
							backgroundImage:
								'url(https://img.icons8.com/dotty/256/birdhouse.png)',
							backgroundSize: 'contain',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							borderRadius: '5px',
							border: 'none',
							outline: 'none',
							cursor: 'pointer',
							height: '100px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							alignItems: 'center',
							textShadow: '0px 0px 5px #fff',
						}}
						onClick={props.getTrips}>
						View All
					</button>
					<button
						className='btn bouncy'
						style={{
							animationDelay: '0.07s',
							backgroundImage:
								'url(https://img.icons8.com/ios/256/sparrowhawk.png)',
							backgroundSize: 'contain',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							borderRadius: '5px',
							border: 'none',
							outline: 'none',
							cursor: 'pointer',
							height: '100px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							alignItems: 'center',
							textShadow: '0px 0px 5px #fff',
						}}
						name='North America'
						onClick={getContinent}>
						North America
					</button>

					<button
						className='btn bouncy'
						style={{
							animationDelay: '0.14s',
							backgroundImage:
								'url(https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/256/external-bird-tropical-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png)',
							backgroundSize: 'contain',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							borderRadius: '5px',
							border: 'none',
							outline: 'none',
							cursor: 'pointer',
							height: '100px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							alignItems: 'center',
							textShadow: '0px 0px 5px #fff',
						}}
						name='South America'
						onClick={getContinent}>
						South America
					</button>
					<button
						className='btn bouncy'
						style={{
							animationDelay: '0.21s',
							backgroundImage:
								'url(https://img.icons8.com/color/256/crane-bird.png)',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							borderRadius: '5px',
							border: 'none',
							outline: 'none',
							cursor: 'pointer',
							height: '100px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							alignItems: 'center',
							textShadow: '0px 0px 5px #fff',
						}}
						name='Asia'
						onClick={getContinent}>
						Asia
					</button>
					<button
						className='btn bouncy'
						style={{
							animationDelay: '0.28s',
							backgroundImage:
								'url(https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/256/external-bird-birds-icongeek26-linear-colour-icongeek26-1.png)',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							borderRadius: '5px',
							border: 'none',
							outline: 'none',
							cursor: 'pointer',
							height: '100px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							alignItems: 'center',
							textShadow: '0px 0px 5px #fff',
						}}
						name='Europe'
						onClick={getContinent}>
						Europe
					</button>
					<button
						className='btn bouncy'
						style={{
							animationDelay: '0.35s',
							backgroundImage:
								'url(https://img.icons8.com/glyph-neue/256/kiwi-bird.png)',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							borderRadius: '5px',
							border: 'none',
							outline: 'none',
							cursor: 'pointer',
							height: '100px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							alignItems: 'center',
							textShadow: '0px 0px 5px #fff',
						}}
						name='Australia'
						onClick={getContinent}>
						Australia
					</button>
					<button
						className='btn bouncy'
						style={{
							animationDelay: '0.35s',
							backgroundImage:
								'url(https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/256/external-bird-tropical-vitaliy-gorbachev-fill-vitaly-gorbachev.png)',
							backgroundSize: 'contain',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							borderRadius: '5px',
							border: 'none',
							outline: 'none',
							cursor: 'pointer',
							height: '100px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							alignItems: 'center',
							textShadow: '0px 0px 5px #fff',
						}}
						name='Africa'
						onClick={getContinent}>
						Africa
					</button>
					<button
						className='btn bouncy'
						onClick={props.handleCreateTripVisible}
						style={{
							animationDelay: '0.42s',
							backgroundImage:
								'url(https://img.icons8.com/external-icongeek26-glyph-icongeek26/256/external-bird-origami-icongeek26-glyph-icongeek26.png)',
							backgroundSize: 'contain',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							borderRadius: '5px',
							border: 'none',
							outline: 'none',
							cursor: 'pointer',
							height: '100px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							alignItems: 'center',
							textShadow: '0px 0px 5px #fff',
						}}>
						Add Trip
					</button>
				</nav>
			</div>
		);
}

export default NavButtons
