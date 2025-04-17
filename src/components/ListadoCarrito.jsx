import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContext"
import ItemCarrito from "./ItemCarrito"
import './ListadoCarrito.scss'

const ListadoCarrito = () => {

    const {carrito, limpiarCarritoContext, guardarCarritoBackend }= useContext(CarritoContext)
    console.log(carrito)

    const handleComprar = () => {
        console.log('Comprando...')
        guardarCarritoBackend()
    }
    
    const handleLimpiarCarrito = () => {
        console.log('Vaciando carrito...')
        limpiarCarritoContext()
    }



  return (
    <div className="listado-carrito">
    
        <section className="listado-carrito__productos"> 
            {
                !carrito.length <= 0 ? (carrito.map((productoCarrito , idx) => {
                    console.log(productoCarrito)
                    return (
                        <ItemCarrito productoCarrito={productoCarrito} key={idx}/>
                    )
                })) : 
                
                (
                <div style={{textAlign: "center"}}>
                    No Hay productos
                </div>
                )


            }
        </section>
        {
            !carrito.length <= 0 && (
                <section className="listado-carrito__comprar">
                    <button onClick={handleComprar}>Comprar</button>
                    <button onClick={handleLimpiarCarrito}>Vaciar carrito</button>
                </section>
            )
        }
        
    </div>
  )
}

export default ListadoCarrito

{/* <table className='tabla-carrito'>
        <thead>
            <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
                carrito.length <= 0 ? (
                    <tr>
                        <td colSpan={5} style={{textAlign: 'center'}}>No hay productos</td>
                    </tr>
                ) : (
                    carrito.map((producto, idx) => (
                        <ItemCarrito key={idx} producto={producto} />
                    )) 
                   
                )
            }
        </tbody>
    </table>
    <hr />
    { !carrito.length <= 0 && (
            <>
                <button onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                <button onClick={handleComprar}>Comprar</button>
            </>
        )
    } */}