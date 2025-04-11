import { BrowserRouter } from 'react-router'
import Rutas from './routes/Rutas'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
 

  return (
    <BrowserRouter>
        <Header/>
        <Rutas/>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
