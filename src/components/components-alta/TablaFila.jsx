import { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../../contexts/ProductosContext'
import convertCurrency from '../../helpers/convert-currency'
import ShowModalContext from '../../contexts/ShowModalContext'
import Swal from 'sweetalert2'
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
    Swal.fire({
      title: "Estas seguro que deseas eliminar?",
      text: "No podras revertir esta accion!",
      icon: "warning",
      color: '#f1f1f1',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!", 
      background: '#18141c' 
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "Tu producto fue eliminado.",
          icon: "success",
          background: '#18141c' ,
          color: '#f1f1f1',
          confirmButtonColor: "#d41c23"
        });
        eliminarProductos(id)
      }
    });
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
        <div className='mostrar-detalles'>
          <img src="" alt="" />
          <h3 style={{alignSelf:'start'}}>Detalles del producto:</h3>
          <p style={{alignSelf:'start'}}>{producto.detalles}</p>    
        </div>
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