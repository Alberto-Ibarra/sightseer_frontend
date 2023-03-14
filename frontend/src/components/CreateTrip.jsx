import React, { useState } from "react";
import axios from "axios";
// import '../App.css'

const CreateTrip = ({ newTrip, setNewTrip, setTrips, updated, setUpdated }) => {
	const handleTripChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setNewTrip((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	const handleNewTripSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:3000/sights', newTrip).then(() => {
			axios.get('http://localhost:3000/sights').then((res) => {
				setTrips(res.data);
				setUpdated(!updated);
				setNewTrip({
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
			<div className='container'>
				<div className='title'>Publish Your Trip</div>
				<form className='card' onSubmit={handleNewTripSubmit}>
					<label>Country</label>
					<input
						type='text'
						name='country'
						value={newTrip.country}
						onChange={handleTripChange}
					/>

          <input
            type="text"
            name="country"
            value={newTrip.country}
            onChange={handleTripChange}
          />

          <label>Continent</label>
          <select>
            <input
              type="text"
              name="continent"
              value={newTrip.continent}
              onChange={handleTripChange}
            />
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="north-america">North America</option>
			<option value="oceania">Oceania</option>
            <option value="south-america">South America</option>
            
          </select>
          <label>Season</label>
          <input
            type="text"
            name="season"
            value={newTrip.season}
            onChange={handleTripChange}
          />

          <label>Image</label>
          <input
						type="text"
						name="image"
						value={newTrip.image}
						onChange={handleTripChange}
					/>

          <label>Rating</label>
          <input
						type="number"
						name="rating"
						value={newTrip.rating}
						onChange={handleTripChange}
					/>

					<label>Description</label>
					<textarea
						name='description'
						value={newTrip.description}
						onChange={handleTripChange}
					/>
					<input className='button' type='submit' value='Add Trip' />
				</form>
			</div>
		</>
	);
     
};

export default CreateTrip;
