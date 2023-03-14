import React, { useState, useEffect } from 'react';
import "./App.css"
import axios from 'axios';
import CreateTrip from './components/CreateTrip';
import DisplayData from './components/DisplayData'
import Navbar from './components/Navbar';

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

	// const handleTripChange = (e) => {
	//   setNewTrip({...newTrip, [e.target.name]: e.target.value})
	// }
	const getTrips = () => {
		axios.get('http://localhost:3000/sights').then((res) => {
			setTrips(res.data);
		});
	};

	const handleUpdate = (e, trip) => {
		e.preventDefault();
		axios
			.put(`http://localhost:3000/sights/${trip._id}`, { ...trip })
			.then(() => {
				axios.get('http://localhost:3000/sights').then((res) => {
					setTrips(res.data);
				});
			});
	};

	const handleInputEdit = (e, id) => {
		const name = e.target.name;
		const value = e.target.value;
		setTrips((prevState) =>
			prevState.map((trip) => {
				if (trip._id === id) {
					return {
						...trip,
						[name]: value,
					};
				} else {
					return trip;
				}
			})
		);
	};
	useEffect(() => {
		getTrips();
	}, []);
	useEffect(() => {
		getTrips();
	}, [updated]);

	// const handleTripChange = (e) => {
	// 	const name = e.target.name;
	// 	const value = e.target.value;
	// 	setNewTrip((prevState) => ({
	// 		...prevState,
	// 		[name]: value,
	// 	}));
	// };
	// const handleNewTripSubmit = (e) => {
	// 	e.preventDefault();
	// 	axios.post('http://localhost:3000/sights', newTrip).then(() => {
	// 		axios.get('http://localhost:3000/sights').then((res) => {
	// 			setTrips(res.data);
	// 		});
	// 	});
	// };

	return (
		<div>
			<Navbar />
			<CreateTrip
				// handleTripChange={handleTripChange}
				// handleNewTripSubmit={handleNewTripSubmit}
				// trips={trips}
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
					const className = index % 4 === 0 ? 'large-trip-data' : 'small-trip-data';
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
