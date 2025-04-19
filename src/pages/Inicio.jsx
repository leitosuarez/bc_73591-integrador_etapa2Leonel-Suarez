import './Inicio.scss'
import Card from "../components/Card"
import { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext'
import useTitulo from '../hooks/useTitulo'
const Inicio = () => {

  useTitulo('Inicio')
  
  const {productos} = useContext(ProductosContext)
  return (
    
    <main>
      <section className="section-cards">       
        <header className="section-cards__header">
          {/* Slider */}
        </header> 
      </section>

      <section className="cards-container" id="card-container">
        {
          productos && productos.map(prod=> (
            <Card producto={prod} key={prod.id}/>
          ))
        }
      </section>
    </main>
    
  )
}

export default Inicio