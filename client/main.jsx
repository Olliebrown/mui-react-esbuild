import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Main app component
import App from './App.jsx'

// Render app in strict mode on the 'root' element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
