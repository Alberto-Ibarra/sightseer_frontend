import React, { useState } from "react";
import axios from "axios";

const DisplayData = (props) => {
  const [editedTrip, setEditedTrip] = useState({});

  const handleDelete = (siteData) => {
    axios.delete(`http://localhost:3000/sights/${siteData._id}`).then(() => {
      axios.get(`http://localhost:3000/sights`).then((res) => {
        props.setTrips(res.data);
      });
    });
  };

  const handleUpdate = (e, trip) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/sights/${trip._id}`, editedTrip)
      .then(() => {
        axios.get(`http://localhost:3000/sights`).then((res) => {
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

  console.log(props.trip._id);

    return(
        <div>
            <p>{props.trip.country}</p>
            <p>{props.trip.continent}</p>
            <button onClick={(e) => handleDelete(props.trip)}>DELETE</button>

            <form onSubmit={(e)=> handleUpdate(e, props.trip)}>
                <input type='text' name='country' placeholder={props.trip.continent} onChange={handleInputEdit}/>
                <input type='text' name='continent' placeholder={props.trip.country} onChange={handleInputEdit}/>
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default DisplayData;
