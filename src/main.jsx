import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routers/Routers.jsx'
import FirbaseProvider from './FirbaseProvider/FirbaseProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirbaseProvider>
    <RouterProvider router={routes}>
     </RouterProvider>
    </FirbaseProvider>
  </React.StrictMode>,
)
