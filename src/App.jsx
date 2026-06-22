import React from 'react'
import SidePanel from './components/sidepanel/SidePanel'
import SidePanelButton from './components/SidePanelButton/SidePanelButton'
import './index.css'
import MainPanel from './components/mainPanel/MainPanel'
import { Routes,Route } from 'react-router-dom'
import PagenotFound from './components/Pagenotfound/PagenotFound'
import YouBroke from './components/YouBroke/YouBroke'
import AIAssistant from './components/AIassistant/AIAssistant'

const App = () => {
  
  return (
    <>

    <Routes>
      <Route path='/' element={<>
      <div className="weather-side-panel">
      <SidePanel />
    </div>
    <div className="weather-main-panel">
      <MainPanel />
    </div>
      </>} />
      <Route path='/AI Assistant' element={<AIAssistant />}/>
      <Route path='/upgrade' element={<YouBroke />} />
      <Route path='*' element={<PagenotFound />} />
    </Routes>
    </>
  )
}

export default App
