import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { peticionesHttp } from "../helpers/peticiones-http";

const CarritoContext = createContext()

const CarritoProvider = ({children})=> {

    const [agregarALCarrito, eliminarDelCarrito, limpiarElCarrito, carrito] = useLocalStorage('carrito', [])

    function isInCarrito(producto) {
        //return true/false
        const isInArray = carrito.filter(prod => prod.id === producto.id)
        return isInArray.length > 0 // devuelve booleano, no hace falta poner el ?
       
        //si el array tiene 1 elemento quiere decir que lo encontro, si tiene 0 elementos es porque el prod no estaba en el carrito
    }
    
    function getProductoCarrito(producto) {
        //Si encuentra el producto lo retorna
        return carrito.find(prod=> prod.id === producto.id)
    }

    const agregarProductoCarritoContext = (producto)=> {

        console.log('ya estoy en el agregar del contexto', producto)

        if(!isInCarrito(producto)) {
            console.log('no esta en el carrito')
            producto.cantidad = 1
            agregarALCarrito(producto)
        } else {
            console.log('esta en el carrito')
            const productoCarrito = getProductoCarrito(producto)
            productoCarrito.cantidad += 1
            window.localStorage.setItem('carrito', JSON.stringify(productoCarrito))
        }
    }

    const eliminarProductoCarrito = (id) => {
        eliminarDelCarrito(id)
    }

    const limpiarCarritoContext = () => {
        limpiarElCarrito()
    }

    const guardarCarritoBackend = async ()=> {

        
        
        try {
            // para que json-server lo guarde como un array:
            const dataCarrito = {
                createAt: Date.now(),
                cantidad: carrito.length,
                carrito
            }
            
            const urlCarrito =  import.meta.env.VITE_BACKEND_CARRITO
            const options = {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(dataCarrito)
            }

            const carritoGuardado = await peticionesHttp(urlCarrito, options)
            console.log(carritoGuardado)

            limpiarElCarrito()

        } catch (error) {
            console.error('[guardarCarritoBackend]', error)
        }
    }

    const calcularCantidadProductosCarrito = ()=> {
        
    }

    const data = {
        agregarProductoCarritoContext,
        carrito,
        eliminarProductoCarrito,
        limpiarCarritoContext,
        guardarCarritoBackend

    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export {CarritoProvider}
export default CarritoContext