import React, { useEffect, useState } from 'react'
import './style.css'

const Forecast = (props) => {

  const [temp, settemp] = useState(props.weather_temp)
  const weekDay = ["Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday"]
  console.log(props.weather_time)
  return (
    <div className='forcase-panel'>
      <div className="forecast-title-Day">24-Hour Weather Forecast</div>
      <div className="temperature-card">
        {props.weather_temp?.filter((_,id)=>id<168).map((temp,id)=>
        <>
        <div className="temperature-info">
          <div className="time-info">{props.weather_time[id].slice(11)}</div>
          <div className='temp-info' key={id}>{temp}°C</div>
        </div>
        </>)}
      </div>
      <div className="forecast-title-week">Week Weather Forecast</div>
      <div className="temperature-card">
        {props.weather_temp?.filter((_,id)=>(id)%24==0).map((temp,id)=>
        <>
        <div className="temperature-info">
          <div className="date-info">{props.weather_time[24*id].slice(0,10)}</div>
          <div className='temp-info' key={id}>{temp}°C</div>
        </div>
        </>)}
      </div>
    </div>
  )
}

export default Forecast
