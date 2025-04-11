import Forumulario from "../components/components-alta/Forumulario"
import Tabla from "../components/components-alta/Tabla"
import useTitulo from "../hooks/useTitulo"
import './Alta.scss'
const Alta = () => {

  useTitulo('Alta')
  
  return (
    <div className="alta">
      <h1>Formulario de alta productos</h1>
      <hr />
      <Forumulario/>
      <Tabla/>
    </div>
  )
}

export default Alta