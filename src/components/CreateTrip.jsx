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
    axios
		.post("https://sightseer-backend.onrender.com/sights", newTrip)
		.then(() => {
        axios
			.get("https://sightseer-backend.onrender.com/sights")
			.then((res) => {
            setTrips(res.data);
            setUpdated(!updated);
            setNewTrip({
				country: "",
				continent: "",
				rating: 0,
				season: "",
				image: "",
				description: "",
            });
			});
		});
	};
	return (
    <>
		<h2>Publish Your Trip</h2>
		<form className="card" onSubmit={handleNewTripSubmit}>
        <label>Country</label>
        <input
			type="text"
			name="country"
			value={newTrip.country}
			onChange={handleTripChange}
			className="addForm"
        />

        <label>Continent</label>
        <input
			type="text"
			name="continent"
			value={newTrip.continent}
			onChange={handleTripChange}
			className="addForm"
        />

        <label>Season</label>
        <input
			type="text"
			name="season"
			value={newTrip.season}
			onChange={handleTripChange}
			className="addForm"
        />
        <label>Image</label>
        <input
			type="text"
			name="image"
			value={newTrip.image}
			onChange={handleTripChange}
			className="addForm"
        />
        <label>Rating</label>
        <input
			type="number"
			name="rating"
			value={newTrip.rating}
			onChange={handleTripChange}
			className="addForm"
			
        />

        <label>Description</label>
        <textarea
			name="description"
			value={newTrip.description}
			onChange={handleTripChange}
			className="addFormTextarea"
        />
        <input className="button" type="submit" value="Publish" />
	</form>
    </>
	);
};

export default CreateTrip;
