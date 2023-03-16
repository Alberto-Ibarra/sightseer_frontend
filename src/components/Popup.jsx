import React from 'react'
import axios from 'axios'

const Popup = (props) => {
    const getDescription = () => {
        axios.get('`https://sightseer-backend.onrender.com/sights/${e.target.name}').then((res) => {
            props.setTrips(res.data.description)
        })
    }

    const Modal = (props) => {
        if(!props.show) {
            return null
        }
    }
    
    return(
        <div className="modal">
            <div className="modalContainer">
                <button onClick={getDescription}></button>
            </div>
            <div className="modalClose">
                <button onClick={props.onClose} className="closeBtn">Close</button>
            </div>
        </div>    
    )
}

export default Popup;