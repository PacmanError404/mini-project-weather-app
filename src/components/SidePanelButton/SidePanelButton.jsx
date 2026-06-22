import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const SidePanelButton = (props) => {
  return (
    <div className='side-panel-button' id={props.name}>
      
      <Link to={props.name}><button>{props.name}</button></Link>
    </div>
  )
}

export default SidePanelButton
