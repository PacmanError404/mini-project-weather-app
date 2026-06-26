import React, { useEffect, useState } from 'react'
import "./style.css"

const InfoPanel = (props) => {

const [date, setdate] = useState(Date().toLocaleUpperCase())
const airQuality = ["Good","Better","Best","Worse","Poor"]
const Pollen = ["High",'Low','Moderate']
  return (
    <div className='info-panel'>
        <div className="feature">Mostly Cloudy</div>
        <div className="temperature">{props.weather_temp?props.weather_temp[0]:"0"}°C</div> 
        <div className="temperature-real">Feels Like {props.weather_temp?props.weather_temp[1]:"0"}°C</div> 
        <div className="location"></div>
        <div className="date"></div>
        <div className="quality">
            <div className="heading location-heading">{props.location?props.location.toLocaleUpperCase():"No Location"}</div>
            <div className="quality-value">{date.slice(0,16)}</div>
        </div>
        <div className="physical-features">
            <div className="humidity physical">
                <div className="heading">Humidity</div>
                <div className="physical-features-value">{(props.random*10)+50}%</div>
            </div>
            <div className="wind physical">
                <div className="heading">Wind</div>
                <div className="physical-features-value">{(props.random*5)}km/h</div>
            </div>
            <div className="pressure physical">
                <div className="heading">Pressure</div>
                <div className="physical-features-value">{(props.random*10)+50}%</div>
            </div>
            <div className="visibility physical">
                <div className="heading">Visibility</div>
                <div className="physical-features-value">{props.random}km</div>
            </div>
        </div>

    </div>
  )
}

export default InfoPanel
