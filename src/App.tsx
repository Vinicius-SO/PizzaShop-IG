import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
export function App() {

  return(
    <HelmetProvider>
      <Toaster position="top-right" richColors/>
      <Helmet titleTemplate='%s | pizza.shop'/>
      <RouterProvider router={router}/>
    </HelmetProvider>

  )
}

