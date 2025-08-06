import {createContext, useEffect, useState } from "react";
import { peticionesHttp } from "../helpers/peticiones-http";


const ProductosContext = createContext()

const ProductosProvider = ({children})=> {
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)
    const [productoAEditar, setProductoAEditar] = useState(null)

    useEffect(() => {
        getAllProductos()
    }, [])
    

    const getAllProductos = async () =>{
        
        try {

            const prods = await peticionesHttp(url, {})
            setProductos(prods)
            
        } catch (error) {
            console.error('[getAllProductos]', error)
        }
    }

    const crearProductos = async (productoNuevo)=> {
        //console.log(productoNuevo)

        try {
            // Borra el id del prodcutonuevo asi el back le asigna uno automaticamente
            delete productoNuevo.id

            const options = {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(productoNuevo)
            }

            const nuevoProd = await peticionesHttp(url, options)
            console.log('NUEVO PRODUCTO:',nuevoProd)

            const nuevoEstadoProductos = [...productos, nuevoProd]
            setProductos(nuevoEstadoProductos)

        } catch (error) {
            console.error('[crearProductos]:', error)
        }
     
    }
    
    const actualizarProductos = async (productoActualizar)=> {
        //if (productoAEditar === null) {setProductoAEditar(productoActualizar)}
        //setProductoAEditar(productoActualizar)
        //console.log(productoActualizar)
        const urlProducto = url + productoActualizar.id

        try {

            const options = {
                method:'PUT',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(productoActualizar)
            }

            const productoActualizado = await peticionesHttp(urlProducto, options)
            console.log(productoActualizado)
            
            const nuevoEstadoProductos = productos.map(prod=>(
                prod.id === productoActualizado.id ? productoActualizado : prod
            ))
            console.log(nuevoEstadoProductos)
            setProductos(nuevoEstadoProductos)

        } catch (error) {
            console.error('[actualizarProductos]:', error)
        }
    }

    

    const eliminarProductos = async (id)=> {
        //console.log(id)
        //debugger
        const urlProducto = url + id
        
        try {

            const ProductoEliminado = await peticionesHttp(urlProducto, {method:'DELETE'})
            const nuevoEstadoProductos = productos.filter((prods) =>  prods.id != id)

            setProductos(nuevoEstadoProductos)
            console.log(ProductoEliminado)

        } catch (error) {
            console.error('[eliminarProductos]:', error)
        }

    }

    const data = {
        productos,
        crearProductos,
        actualizarProductos,
        eliminarProductos,
        productoAEditar,
        setProductoAEditar
    }

    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}

export {ProductosProvider}
export default ProductosContext