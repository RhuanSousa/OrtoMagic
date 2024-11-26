import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Info3 from './inrformativo_3.jsx'
import Info1 from './informativo_1.jsx'
import Info2 from './informativo_2.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Info2 />
  </StrictMode>,
)
