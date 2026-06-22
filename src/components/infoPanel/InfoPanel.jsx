import React, { useEffect, useState } from 'react'
import "./style.css"

const InfoPanel = (props) => {
const [random, setrandom] = useState(Math.round((Math.random()*5)))

useEffect(()=>{
    setrandom(Math.round((Math.random()*5)))
},[random])
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
            <div className="air-quality">
                <div className="heading">Air Quality</div>
                <div className="quality-value">{airQuality[random]}</div>
            </div>
            <div className="uv-index">
                <div className="heading">UV-Index</div>
                <div className="quality-value">{Math.round((Math.random()*10)+1)}</div>

            </div>
            <div className="pollen">
                <div className="heading">Pollen</div>
                <div className="quality-value">{Pollen[Math.round(Math.random()*3)]}</div>
            </div>
        </div>
        <div className="physical-features">
            <div className="humidity physical">
                <div className="heading">Humidity</div>
                <div className="physical-features-value">{Math.round((Math.random()*50)+50)}%</div>
            </div>
            <div className="wind physical">
                <div className="heading">Wind</div>
                <div className="physical-features-value">{Math.round()}</div>
            </div>
            <div className="pressure physical">
                <div className="heading">Pressure</div>
                <div className="physical-features-value">82%</div>
            </div>
            <div className="visibility physical">
                <div className="heading">Visibility</div>
                <div className="physical-features-value">10km</div>
            </div>
        </div>

    </div>
  )
}

export default InfoPanel
