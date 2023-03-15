import React, { useState, useEffect } from 'react';
import "./App.css"
import axios from 'axios';
import CreateTrip from './components/CreateTrip';
import DisplayData from './components/DisplayData'
import Navbar from './components/Navbar';
import NavButtons from './components/NavButtons';

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
	const [updated, setUpdated] = useState(false);


	const getTrips = () => {
		axios.get('https://sightseer-backend.onrender.com/sights').then((res) => {
			setTrips(res.data);
		});
	};

	

	useEffect(() => {
		getTrips();
	}, []);
	useEffect(() => {
		getTrips();
	}, [updated]);


	return (
		<div>
			<Navbar />
			<NavButtons
				getTrips={getTrips}
				setTrips={setTrips}
			/>
			<CreateTrip
				trips={trips}
				newTrip={newTrip}
				setNewTrip={setNewTrip}
				setTrips={setTrips}
				setUpdated={setUpdated}
				updated={updated}
			/>
			<div className='grid'>
				{
				trips.map((trip, index) => {
					const className = index % 5 === 0 ? ' card1 card-tall card-wide' : 'card1';
					return(
					<DisplayData 
					setTrips={setTrips}
					trip = {trip}
					className={className}
					/>
					)
				})
				}
			</div>
		</div>
	);
}

export default App;
