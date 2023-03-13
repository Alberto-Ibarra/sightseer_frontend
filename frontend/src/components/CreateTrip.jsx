import React from 'react';

const CreateTrip = (props) => {
	return (
		<>
			<div>Create Trip</div>
			<form onSubmit={props.handleNewTripSubmit}>
				<label>Country</label>
				<input type='text' name='country' onChange={props.handleTripChange} />

				<label>Continent</label>
				<input type='text' name='continent' onChange={props.handleTripChange} />

				<label>Season</label>
				<input type='text' name='season' onChange={props.handleTripChange} />

				<label>Image</label>
				<input type='text' name='image' onChange={props.handleTripChange} />

				<label>Rating</label>
				<input type='number' name='rating' onChange={props.handleTripChange} />

				<label>Description</label>
				<textarea name='description' onChange={props.handleTripChange} />
				<input type='submit' value='Add Trip' />
			</form>
		</>
	);
};

export default CreateTrip;
