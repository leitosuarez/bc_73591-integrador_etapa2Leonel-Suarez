import { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../../contexts/ProductosContext'
import convertCurrency from '../../helpers/convert-currency'
import ShowModalContext from '../../contexts/ShowModalContext'
const TablaFila = ({producto}) => {

  const {actualizarProductos, eliminarProductos, setProductoAEditar} = useContext(ProductosContext)
  
  const {handleShowModal} = useContext(ShowModalContext)
  

  const handleEditar = (producto)=> {
      //actualizarProductos(producto)
      setProductoAEditar(producto)
      handleShowModal()
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
      <td><div>{'$'+convertCurrency(producto.precio)}</div></td>
      <td><div>{producto.stock}</div></td>
      <td><div>{producto.marca}</div></td>
      {/* <td>* {producto.detalles} </td> */}
      <td className='tabla-fila-alta__foto'>
        <div>
          <img src={producto.foto} alt={producto.nombre} style={{width: '60px'}}/>
        </div>
      </td>
      <td><div>{producto.envio ? 'Si' : 'No'}</div></td>
      <td className='tabla-fila-alta__acciones'>
        <div>
        <button className='boton-ver'>
        <i className="fa-regular fa-eye"></i>
          Ver
        </button>
        <button
        className='boton-editar'
        onClick={()=>{handleEditar(producto)}}
        >
          <i className="fa-regular fa-pen-to-square"></i>
          Editar
        </button>
        <button
        className='boton-eliminar'
        onClick={()=> {handleEliminar(producto.id)}}
        >
          <i className="fa-solid fa-trash"></i>
          Borrar
        </button>
        </div>
      </td>
    </tr>
  )
}

export default TablaFila