import ListadoCarrito from "../components/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"
import './Carrito.scss'

const Carrito = () => {

  useTitulo('Carrito')
  
  return (
    <main className="carrito-page">
      <h1>Productos</h1>
      <ListadoCarrito/>
    </main>
  )
}

export default Carrito