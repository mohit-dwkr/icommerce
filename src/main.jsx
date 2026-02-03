import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { DataProvider } from './Context/DataContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from 'react-scroll-to-top'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <App />
          <ScrollToTop smooth color='white' style={{backgroundColor:'blue', display:'flex', alignItems:'center', justifyContent:'center'}} />
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          
          />
        </ClerkProvider>
      </CartProvider>
    </DataProvider>
  </StrictMode>,
)
