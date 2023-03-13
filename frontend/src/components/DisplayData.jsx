import React from 'react'
import axios from 'axios'

const DisplayData = (props) => {
    const handleDelete = (siteData) => {
        axios.delete(`http://localhost:3000/sights/${siteData._id}`)
          .then(()=> {
            axios.get(`http://localhost:3000/sights`)
            .then((res) => {
              props.setTrips(res.data)
            })
          })
      };

      const handleUpdate = (e, trip) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/sights/${trip._id}`, {...trip,})
            .then(() => {
                axios.get(`http://localhost:3000/sights`)
                .then((res) => {
                    props.setTrips(res.data)
                })
            })
      }

      const handleInputEdit = (e, id) => {
        const name = e.target.name;
        const value = 
            e.target.value;
        props.setTrips((prevState) =>{
            prevState.map((trip) => {
                if(trip._id === id) {
                    return{
                        ...trip,
                        [name]: value,
                    };
                }else{
                    return trip;
                }
            })
        })
    }
    
    // console.log(props.trip._id)

    return(
        <div>
            <p>{props.trip.country}</p>
            <p>{props.trip.continent}</p>
            <button onClick={(e) => handleDelete(props.trip)}>DELETE</button>
            <input type='text' placeholder={props.trip.continent} onChange={(e) => handleInputEdit(e.props.trip._id)}></input>
            <input type='text' placeholder={props.trip.country} onChange={(e) => handleInputEdit(e.props.trip._id)}></input>
            <button onClick={(e) => handleUpdate(e.props.trip._id)}>Update</button>
        </div>
    )
}

export default DisplayData;