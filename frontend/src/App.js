import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// need database state
// need new trip state
// wrap createtrip jsx in a state to display
function App() {
	const [trips,setTrips] = useState([]);
	const [newtrip, setNewTrip] = useState({})
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>SightSeer</h1>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
	const handleTripChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setNewTrip((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};