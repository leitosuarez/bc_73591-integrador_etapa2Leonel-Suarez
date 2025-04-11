import { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../../contexts/ProductosContext'
const TablaFila = ({producto}) => {

  const {actualizarProductos, eliminarProductos, setProductoAEditar} = useContext(ProductosContext)

  const handleEditar = (producto)=> {
      //actualizarProductos(producto)
      setProductoAEditar(producto)
  }

  const handleEliminar = (id)=> {
    // Logica de SweetAleert
      eliminarProductos(id)
  }

  return (
    <tr className='tabla-fila-alta'>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img src={producto.foto} alt={producto.nombre} style={{width: '60px'}}/>
      </td>
      <td>{producto.envio ? 'Si' : 'No'}</td>
      <td>
        <button>
          Ver
        </button>
        <button
        onClick={()=>{handleEditar(producto)}}
        >
          Editar
        </button>
        <button
        onClick={()=> {handleEliminar(producto.id)}}
        >
          Borrar
        </button>
      </td>
    </tr>
  )
}

export default TablaFila