import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyContextProvider from './Screens/ContextData/ContextFiles.jsx'
import { ThemeProvider } from './Screens/ContextData/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </ThemeProvider>
  </StrictMode>,
)
