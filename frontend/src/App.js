import React, { useState, useEffect } from 'react';

import axios from 'axios';
import CreateTrip from './components/CreateTrip';
import DisplayData from './components/DisplayData'

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
	const [updated,setUpdated] = useState(false);

	// const handleTripChange = (e) => {
	//   setNewTrip({...newTrip, [e.target.name]: e.target.value})
	// }
	const getTrips = () => {
		axios.get('http://localhost:3000/sights').then((res)=> {
			setTrips(res.data)
		});
	};


	useEffect(()=> {
		getTrips();
	},[])
	useEffect(()=> {
		getTrips();
	},[updated])

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
			<h1>Test</h1>
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
      <section>
        {
          trips.map((trip) => {
            return(
             <DisplayData 
             setTrips={setTrips}
             trip = {trip}
             />
            )
          })
        }
      </section>
		</div>
	);
}

export default App;
