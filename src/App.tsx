import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/themeProvider'
export function App() {

  return(
    <HelmetProvider>
      <ThemeProvider storageKey="pizaashop-theme" defaultTheme='dark'>
        <Toaster position="top-right" richColors/>
        <Helmet titleTemplate='%s | pizza.shop'/>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </HelmetProvider>

  )
}

