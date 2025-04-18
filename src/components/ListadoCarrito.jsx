import { useContext, useEffect, useState } from "react"
import CarritoContext from "../contexts/CarritoContext"
import ItemCarrito from "./ItemCarrito"
import './ListadoCarrito.scss'
import convertCurrency from "../helpers/convert-currency"

const ListadoCarrito = () => {

    const {carrito, limpiarCarritoContext, guardarCarritoBackend }= useContext(CarritoContext)
    //const [productsCount, setProductsCount] = useState(0); 
    console.log(carrito)
    

    
    const handleComprar = () => {
        console.log('Comprando...')
        guardarCarritoBackend()
    }
    
    const handleLimpiarCarrito = () => {
        console.log('Vaciando carrito...')
        limpiarCarritoContext()
    }

    const getProductsData = (carrito)=> {
        //debugger
        let contador = 0
        let totalPrecio = 0
        
        Array.isArray(carrito) && carrito.forEach((prod)=>{
            contador += prod.cantidad
            totalPrecio += prod.cantidad * prod.precio
        })

        return {contador,totalPrecio}

    }

    const cantidadProducts = getProductsData(carrito).contador
    const totalPrecioProducts = getProductsData(carrito).totalPrecio



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
            carrito.length > 0 && (
                <section className="listado-carrito__comprar">
                    <h1>Resumen de la compra</h1>
                    <div className="listado-carrito__comprar-info">
                        <div>
                            <h3>Total de prodcutos del carrito:</h3>
                            <span>{cantidadProducts}</span>
                        </div>
                        <div>
                            <h3>Precio final a pagar:</h3>
                            <span>{'$'+convertCurrency(totalPrecioProducts)}</span>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleComprar}>Comprar</button>
                        <button onClick={handleLimpiarCarrito}>Vaciar carrito</button>
                    </div>
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