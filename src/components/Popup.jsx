
import axios from 'axios'
import {useState, useEffect} from 'react'

const Popup = (props) => {
    const popupDescription = () => {
        axios.get(`https://sightseer-backend.onrender.com/sights`).then((res) => {
            props.setTrips(res.data)
        });
    }

    useEffect(() => {
        popupDescription()
    })

    
    return(
        <div>
            <button onClick={props.trip.description}>Show More</button>
        </div>
    )
}

export default Popup;

