import { useContext, useState } from "react";
import { createContext } from "react";
import ProductosContext from "./ProductosContext";

const ShowModalContext = createContext()

const ShowModalProvider = ({children}) => {

    const {productoAEditar, setProductoAEditar} = useContext(ProductosContext)

    const [showModal, setShowModal] = useState(false)

    const handleShowModalCrear = ()=> {
        
        showModal ? setShowModal(false) : setShowModal(true)
        console.log(showModal)
        
        if(productoAEditar) {
            setProductoAEditar(null)
        }
        console.log('prodaeditar',productoAEditar)
      }

    const handleShowModal = ()=> {

        showModal ? setShowModal(false) : setShowModal(true)
        console.log('showmodalstate',showModal)
    }
    
    const data = {
        showModal,
        handleShowModal,
        handleShowModalCrear
    }
    return <ShowModalContext.Provider value={data}>{children}</ShowModalContext.Provider>

}
export {ShowModalProvider}
export default ShowModalContext

