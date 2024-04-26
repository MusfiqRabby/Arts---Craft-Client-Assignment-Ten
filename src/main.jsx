import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routers/Routers.jsx'
import FirbaseProvider from './FirbaseProvider/FirbaseProvider.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirbaseProvider>
    <RouterProvider router={routes}>
     </RouterProvider>
    </FirbaseProvider>
  </React.StrictMode>,
)
