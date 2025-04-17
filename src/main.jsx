import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { ProductosProvider } from './contexts/ProductosContext.jsx'
import { CarritoProvider } from './contexts/CarritoContext.jsx'
import { ShowModalProvider } from './contexts/ShowModalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoProvider>
      <ProductosProvider>
        <ShowModalProvider>
          <App />
        </ShowModalProvider>
      </ProductosProvider>
    </CarritoProvider>
  </StrictMode>,
)
