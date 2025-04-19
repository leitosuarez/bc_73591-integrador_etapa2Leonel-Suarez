import { useContext, useState } from "react"
import Forumulario from "../components/components-alta/Forumulario"
import Tabla from "../components/components-alta/Tabla"
import useTitulo from "../hooks/useTitulo"
import './Alta.scss'
import ShowModalContext from "../contexts/ShowModalContext"
const Alta = () => {

  useTitulo('Alta')

  const formInicial = {
    id: null,
    nombre: '',
    precio: '',
    stock: '',
    categoria: '',
    detalles: '',
    marca: '',
    foto: '',
    envio: false
}

  const {showModal, handleShowModalCrear} = useContext(ShowModalContext)
  const [form, setForm] = useState(formInicial)

const handleShow = ()=> {
  handleShowModalCrear()

  if (!showModal) {
    setForm(formInicial)
  }
}

  return (
    <div className="alta">
      <div className="alta__header">
        <h1>Formulario de alta productos</h1>
        <div>
          <button
          onClick={handleShow}
          >+ Añadir producto</button>
        </div>
      </div>
      <Forumulario form={form} setForm={setForm} formInicial={formInicial}/>
      <Tabla />
    </div>
  )
}

export default Alta