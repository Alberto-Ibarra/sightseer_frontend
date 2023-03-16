import React, { useState } from 'react';
import axios from 'axios';

const DisplayData = (props) => {
	const [editedTrip, setEditedTrip] = useState({});

	const handleDelete = (siteData) => {
		axios.delete(`https://sightseer-backend.onrender.com/sights/${siteData._id}`).then(() => {
			axios.get(`https://sightseer-backend.onrender.com/sights`).then((res) => {
				props.setTrips(res.data);
			});
		});
	};

	const handleUpdate = (e, trip) => {
		e.preventDefault();
		axios
			.put(`https://sightseer-backend.onrender.com/sights/${trip._id}`, editedTrip)
			.then(() => {
				axios.get(`https://sightseer-backend.onrender.com/sights`).then((res) => {
					props.setTrips(res.data);
				});
			});
	};

	const handleInputEdit = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setEditedTrip((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// console.log(props.trip._id)

	return (
		
		<div className={props.className}>
			<div
				style={{
					backgroundImage: `url(${props.trip.image})`,
					height: '100%',
					width: '100%',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}></div>
			<p>{props.trip.country}</p>
			<p>{props.trip.continent}</p>
			<form id="displayForm"onSubmit={(e) => handleUpdate(e, props.trip)}>
				<input
					type='text'
					name='country'
					placeholder={props.trip.continent}
					onChange={handleInputEdit}
				/>
				<input
					type='text'
					name='continent'
					placeholder={props.trip.country}
					onChange={handleInputEdit}
				/>

				<button type='submit'>Update</button>
				<button id="displayB" onClick={(e) => handleDelete(props.trip)}>Delete</button>
			</form>

		</div>
		
	);
		};

export default DisplayData;
