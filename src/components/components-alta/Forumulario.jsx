import { useContext, useEffect, useState } from "react"
import ProductosContext from "../../contexts/ProductosContext"

const Forumulario = () => {

  const {crearProductos, productoAEditar, setProductoAEditar, actualizarProductos} = useContext(ProductosContext)

  useEffect(() => {
    handleEditar()
  }, [productoAEditar])
  
  

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

  const [form, setForm] = useState(formInicial)

  const handleSubmit = (e)=> {
      e.preventDefault()
      
      if(form.id === null) {
        crearProductos(form)
      } else {
        actualizarProductos(form)
        handleReset()
      }
/*       console.log(e.target.textContent)
      if(e.target.textContent === 'Guardar') {
        crearProductos(form)

      } else if(e.target.textContent === 'Editar') {
        actualizarProductos(form)

        handleReset()
      }   tambien podria usar esta logica*/
  }

  const handleChange = (e)=> {

      console.dir(e.target)
      const {type, name, checked, value} = e.target

      setForm({
        ...form, 
        [name]: type === 'checkbox' ? checked : value
      })
  }

  const handleReset = ()=> {
      setForm(formInicial)
      setProductoAEditar(null)
  }

  const handleEditar = ()=> {

    if(productoAEditar != null) {
      console.log(productoAEditar)
      setForm({...productoAEditar}) 
    }
  }


  return (
   <>
   <h2>Agrear: Editar</h2>

   <form action="">
    <div>
      <label htmlFor="lbl-nombre">Nombre</label>
      <input 
      type="text" 
      id="lbl-nombre" 
      name="nombre" 
      value={form.nombre} 
      onChange={handleChange}/>
    </div>
    <div>
      <label htmlFor="lbl-nombre">Precio</label>
      <input 
      type="text" 
      id="lbl-precio"
      name="precio" 
      value={form.precio} 
      onChange={handleChange}/>
    </div>
    <div>
      <label htmlFor="lbl-stock">Stock</label>
      <input 
      type="text" 
      id="lbl-stock" 
      name="stock" 
      value={form.stock} 
      onChange={handleChange}/>
    </div>
    <div>
      <label htmlFor="lbl-categoria">Catogoria</label>
      <input 
      type="text" 
      id="lbl-categoria" 
      name="categoria" 
      value={form.categoria} 
      onChange={handleChange}/>
    </div>
    <div>
      <label htmlFor="lbl-detalles">Detalles</label>
      <input 
      type="text" 
      id="lbl-detalles" 
      name="detalles" 
      value={form.detalles} 
      onChange={handleChange}/>
    </div>
    <div>
      <label htmlFor="lbl-marca">Marca</label>
      <input 
      type="text" 
      id="lbl-marca" 
      name="marca" 
      value={form.marca} 
      onChange={handleChange}/>
    </div>
    <div>
      <label htmlFor="lbl-foto">Foto</label>
      <input 
      type="text" 
      id="lbl-foto" 
      name="foto" 
      value={form.foto} 
      onChange={handleChange}/>
    </div>
    <div>
      <label htmlFor="lbl-envio">Envio</label>
      <input 
      type="checkbox" 
      id="lbl-envio" 
      name="envio" 
      checked={form.envio}
      onChange={handleChange}
      />
    </div>

    <button type="submit" onClick={handleSubmit}>{productoAEditar ? 'Editar' : 'Guardar'}</button>
    <button type="reset" onClick={handleReset}>Resetear</button>
   </form> 
   </>
  )
}

export default Forumulario