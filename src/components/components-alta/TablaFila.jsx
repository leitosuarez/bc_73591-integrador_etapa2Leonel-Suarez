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
      <td className='tabla-fila-alta__nombre'><div>{producto.nombre}</div></td>
      <td className='tabla-fila-alta__categoria'>
        <div>
          <span>
          {producto.categoria}
          </span>
        </div>
      </td>
      <td><div>{producto.precio}</div></td>
      <td><div>{producto.stock}</div></td>
      <td><div>{producto.marca}</div></td>
      {/* <td>* {producto.detalles} </td> */}
      <td className='tabla-fila-alta__foto'>
        <div>
          <img src={producto.foto} alt={producto.nombre} style={{width: '60px'}}/>
        </div>
      </td>
      <td><div>{producto.envio ? 'Si' : 'No'}</div></td>
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