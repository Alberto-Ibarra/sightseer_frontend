import React, { useState } from 'react';
import axios from 'axios';

const CreateTrip = (props) => {
	const handleTripChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		props.setNewTrip((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	const handleNewTripSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:3000/sights', props.newTrip).then(() => {
			axios.get('http://localhost:3000/sights').then((res) => {
				props.setTrips(res.data);
				props.setUpdated(!props.updated);
        props.setNewTrip({
					country: '',
					continent: '',
					rating: 0,
					season: '',
					image: '',
					description: '',
				});
			});
		});
	};
	return (
		<>
			<div>Create Trip</div>
			<form onSubmit={handleNewTripSubmit}>
				<label>Country</label>
				<input type='text' name='country' onChange={handleTripChange} />

				<label>Continent</label>
				<input type='text' name='continent' onChange={handleTripChange} />

				<label>Season</label>
				<input type='text' name='season' onChange={handleTripChange} />

				<label>Image</label>
				<input type='text' name='image' onChange={handleTripChange} />

				<label>Rating</label>
				<input type='number' name='rating' onChange={handleTripChange} />

				<label>Description</label>
				<textarea name='description' onChange={handleTripChange} />
				<input type='submit' value='Add Trip' />
			</form>
		</>
	);
};

export default CreateTrip;
