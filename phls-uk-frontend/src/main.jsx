import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n'
import './index.css'
import App from './App.jsx'

const savedTheme = localStorage.getItem("phlsTheme") || "light";
document.body.classList.toggle("dark-theme", savedTheme === "dark");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)