import { useContext, useEffect, useState } from 'react'
import CarritoContext from '../contexts/CarritoContext'
import './ItemCarrito.scss'
import convertCurrency from '../helpers/convert-currency'
const ItemCarrito = ({productoCarrito}) => {


    const { eliminarProductoCarrito, agregarProductoCarritoContext } = useContext(CarritoContext)
    const [productsCount, setProductsCount] = useState(productoCarrito.cantidad)

    
    const incrementCounter = (productoCarrito)=> {
        //debugger
        agregarProductoCarritoContext(productoCarrito)
        setProductsCount(productsCount + 1)

        
    }
    
    const handleEliminar = (id) => {
        console.log('Eliminando el productoCarrito...', id)
        eliminarProductoCarrito(id)
    }

  return (
   <div className='item-carrito'>
    <div className='item-carrito__imagen'>
        <img src={productoCarrito.foto} alt={productoCarrito.nombre} />
    </div>
    <div className='item-carrito__nombre-acciones'>
        <div className='item-carrito__nombre-acciones__nombre'>
            <h2>{productoCarrito.nombre}</h2>
        </div>
        <div className='item-carrito__nombre-acciones__acciones'>
            <button
            className='delete-button'
            onClick={handleEliminar}
            >
                <i class="fa-regular fa-trash-can"></i>
            </button>
            <button
            className='buy-button'
            >
                
                Comprar ahora
            </button>
        </div>
    </div>
    <div className='item-carrito__cantidad-precio'>
        <div className='item-carrito__cantidad-precio__cantidad'>
            {'Cantidad:'+ ' '+ productsCount}
            <button onClick={()=> incrementCounter(productoCarrito)}>+</button>
        </div > 
        <p>
            {'$'+convertCurrency(productoCarrito.precio * productsCount)}
        </p>
    </div>
   </div>
  )
}

export default ItemCarrito

 {/* <tr>
        <td>
            <img src={productoCarrito.foto} alt={productoCarrito.nombre} width="50px" />
        </td>
        <td>{productoCarrito.nombre}</td>
        <td>{productoCarrito.cantidad}</td>
        <td>{'$'+convertCurrency(productoCarrito.precio * productoCarrito.cantidad)}</td>
        <td>
            <button onClick={() => handleEliminar(productoCarrito.id)}>Eliminar</button>
        </td>
    </tr> */}