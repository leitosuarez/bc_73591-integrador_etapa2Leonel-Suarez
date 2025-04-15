import ListadoCarrito from "../components/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"
import './Carrito.scss'

const Carrito = () => {

  useTitulo('Carrito')
  
  return (
    <div className="carrito-page">
      <h1>Productos</h1>
      <hr />
      <ListadoCarrito/>
    </div>
  )
}

export default Carrito