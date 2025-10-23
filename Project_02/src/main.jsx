import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainScreen from './pages/MainScreen'
import SideFlap from './pages/SideFlap'
import { SidebarProvider } from './pages/SideFlap/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarProvider>
      <div id="main-container">
        <SideFlap />
        <MainScreen />
      </div>
    </SidebarProvider>
  </StrictMode>,
)