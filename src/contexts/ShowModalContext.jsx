import { useContext, useState } from "react";
import { createContext } from "react";
import ProductosContext from "./ProductosContext";

const ShowModalContext = createContext()

const ShowModalProvider = ({children}) => {

    const {productoAEditar, setProductoAEditar} = useContext(ProductosContext)

    const [showModal, setShowModal] = useState(false)

    const handleShowModal = ()=> {
        if(productoAEditar) {
            setProductoAEditar(null)
        }
        console.log(productoAEditar)

        showModal ? setShowModal(false) : setShowModal(true)
        console.log(showModal)
      }

    const handleShowModalEditar = ()=> {

        showModal ? setShowModal(false) : setShowModal(true)
        console.log(showModal)
    }
    
    const data = {
        showModal,
        handleShowModal,
        handleShowModalEditar
    }
    return <ShowModalContext.Provider value={data}>{children}</ShowModalContext.Provider>

}
export {ShowModalProvider}
export default ShowModalContext

