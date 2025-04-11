import TablaFila from "./TablaFila"
import './Tabla.scss'
import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"
const Tabla = () => {

  const {productos} = useContext(ProductosContext)
  return (
    <table className="tabla-alta">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Categoria</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Marca</th>
          {/* <th>Detalles</th> */}
          <th>Foto</th>
          <th>Envio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
      {
        productos && productos.map(prod=>(
          <TablaFila producto={prod} key={prod.id}/>
        ))
      }
      </tbody>
    </table>
  )
}

export default Tabla