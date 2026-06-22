import React from 'react'
import './style.css'
import SidePanelButton from '../SidePanelButton/SidePanelButton'
import SidePanelUpgrade from '../sidepanelupgrade/SidePanelUpgrade'


const SidePanel = () => {

    const sideButtons = ['Overview','Weather Map','Radar & Satellite','ForeCast','AI Assistant','Alerts','Travel Planner','History & Stats','Setting']
    
    return (
    <div className="side-panel">
        <div className='weather-side-panel-header'>
      <p>Weather.api</p>
    </div>
    <div className="weather-side-panel-button">
        {sideButtons.map((button)=>{
        return(
            <SidePanelButton name={button}/>
        )
      })}
    </div>
    <SidePanelUpgrade />
    </div>
  )
}

export default SidePanel
