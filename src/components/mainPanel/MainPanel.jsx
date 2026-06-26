import React, { useEffect, useState } from 'react'
import './style.css'
import Coordinates from '../Coordinates/Coordinates'
import InfoPanel from '../infoPanel/InfoPanel'
import Forecast from '../ForeCast/Forecast'

const MainPanel = () => {
    const [location, setlocation] = useState('')
    const [latitude, setlatitude] = useState(0)
    const [longitude, setlongitude] = useState(0)
    const [weather, setweather] = useState({})
    const [loading, setloading] = useState(false)
    const [random, setrandom] = useState(0)

    useEffect(()=>{
        setrandom(Math.round((Math.random()*5)))
    })
    
    const coordinate = async (location)=>{
        try{
        setloading(true)
        let response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en`)
        let coord = await response.json()
        setlatitude(coord.results[0].latitude);
        setlongitude(coord.results[0].longitude);
        let response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)
        let weather_info = await response2.json()
        setloading(false)
        setweather(weather_info);
    }catch(error){
            alert("Searched Location does not exist in our database. Sorry for the inconvenience caused!")
            setloading(false)
            setlatitude(0)
            setlongitude(0)
            setweather({})
        }
    }

    const loadFunction = ()=>{
        if(loading){
            return(
                <div className="loading-tab">
                    <div className='loading'>Loading Data...</div>
                    <span className='loading-span'></span>
                </div>
            )
        }
    }
  return (
    <div className='weather-main-panel'>
    {loadFunction()}
    <div className="search-bar">
        <input type="text" value={location} onChange={(e)=>setlocation(e.target.value)} className='search-bar-input' placeholder='Enter Your Place...' />
        <button onClick={()=>{
                if(!location.trim()==0){
                    coordinate(location);
                    console.log(weather)
                }
        }}>Search Weather</button>
        <a href="https://www.google.com/maps" target='_blank'><button>Location</button></a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScqy_RsUF6zqXUCAMiOduVNQO2ydYDkqzbGsuRELbvdO-uvWA/viewform?usp=publish-editor" target='_blank'><button>Rate Us :)</button></a>
    </div>
    <Coordinates latitude={latitude} longitude={longitude} />
    <InfoPanel weather_time={weather?.hourly?.time} weather_temp={weather?.hourly?.temperature_2m} random={random} location={location}/>
    <Forecast weather_time={weather?.hourly?.time} weather_temp={weather?.hourly?.temperature_2m} />
    </div>
  )
}

export default MainPanel
