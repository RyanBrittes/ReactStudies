import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainScreen from './pages/MainScreen'
import SideFlap from './pages/SideFlap'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id="main-container">
      <SideFlap />
      <MainScreen />
    </div>
  </StrictMode>,
)
