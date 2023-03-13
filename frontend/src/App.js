import React, { useState, useEffect } from 'react';

import axios from 'axios';
import CreateTrip from './components/CreateTrip';
function App() {
	const [trips, setTrips] = useState([]);
	const [newTrip, setNewTrip] = useState({
		country: '',
		continent: '',
		rating: 0,
		season: '',
		image: '',
		description: '',
	});

	// const handleTripChange = (e) => {
	//   setNewTrip({...newTrip, [e.target.name]: e.target.value})
	// }

	const handleTripChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setNewTrip((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div>
			<h1>Test</h1>
			<CreateTrip handleTripChange={handleTripChange} />
		</div>
	);
}

export default App;
