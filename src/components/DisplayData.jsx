import React, { useState } from 'react';
import axios from 'axios';
import Popup from './Popup'

const DisplayData = (props) => {
	const [editedTrip, setEditedTrip] = useState({});
	const [description, setDescription] = useState(false);

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

	

	const toggleDescription = () => {
		setDescription(!description)
	}
	
	return (
		
		<div className={props.className}>
			<div id='image'
				style={{
					backgroundImage: `url(${props.trip.image})`,
					height: '100%',
					width: '100%',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
				{description && (
					<div className="descriptionBox">
						<div onClick={toggleDescription}></div>
						<div className="descriptionContent">
							<p>{props.trip.description}</p>
						</div>
						<button className="closeBtn" onClick={toggleDescription}>close</button>
					</div>
				)}
			</div>
			<p>{props.trip.country}</p>
			<p>{props.trip.continent}</p>
			<form id="displayForm" onSubmit={(e) => handleUpdate(e, props.trip)}>
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
			<div>
				<button onClick={toggleDescription} className="showMoreBtn">Show More</button>
				
			</div>
		</div>
		
	);
		};

export default DisplayData;
