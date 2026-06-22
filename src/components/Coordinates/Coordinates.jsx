import React from 'react'
import './style.css'

const Coordinates = (props) => {
  return (
    <div className='coordinate-portal'>
        <div className="latitude coordinate">Latitude : {props.latitude?props.latitude:0}</div>
        <div className="longitude coordinate">Longitude : {props.longitude?props.longitude:0}</div>
      
    </div>
  )
}

export default Coordinates
