import { useContext, useEffect, useState } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import	'./Formulario.scss'
import ShowModalContext from "../../contexts/ShowModalContext"
import Swal from "sweetalert2"
import DragDrop from "./DragDrop"
const Forumulario = ({form, setForm}) => {

  const {crearProductos, productoAEditar, setProductoAEditar, actualizarProductos} = useContext(ProductosContext)

  const { showModal, handleShowModal} = useContext(ShowModalContext)

  useEffect(() => {
    handleEditar()
  }, [productoAEditar])
  
  const handleShow = ()=> {
    handleShowModal()
  }

  /* Estados para gestioanr el drag and drop */
  const placeholderImage = 'http://localhost:8080/uploads/placeholder-image.jpg'
  const [foto, setfoto] = useState(placeholderImage) /* carga el usuario localmente */
  const [srcImageBack, setSrcImageBack] = useState(placeholderImage)

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

  //const [form, setForm] = useState(formInicial)

  function checkInputs () {
    //debugger
    /* const formContent = [form.nombre, form.precio, form.stock, form.categoria, form.marca, form.foto, form.detalles]

    const formNames = ['Nombre', 'Precio', 'Stock', 'Categoria', 'Marca', 'Foto', 'Detalles'] */
    const formContent = [form.nombre, form.precio, form.stock, form.categoria, form.marca,form.detalles]

    const formNames = ['Nombre', 'Precio', 'Stock', 'Categoria', 'Marca', 'Detalles']
    const arrayCamposFalseIndex = []
    console.log(formContent)
    let requirements = true
    
    const isNumberPrecio = Number(formContent[1])
    const isNumberStock = Number(formContent[2])

    formContent.forEach((input , index)=> {
      if(input === "" || !isNumberPrecio || !isNumberStock ) {
          
        requirements = false

        if(!isNumberPrecio && index === 1) {
          window.alert(`El campo ${formNames[1]} debe ser un numero`)
        } else {
          if(input === "") {
            arrayCamposFalseIndex.push(index)
          }

          if(!isNumberStock && index === 2) {
            window.alert(`El campo ${formNames[2]} debe ser un numero`)
          }
        }
      }
    })
    

    if(arrayCamposFalseIndex.length === 1) {
      
      arrayCamposFalseIndex.forEach(falseIndex => {
        window.alert(`El campo ${formNames[falseIndex]} debe ser completado`)
      })

      window.alert(`El campo ${formNames[falseIndex]} debe ser completado`)
    }

    if(arrayCamposFalseIndex.length > 1) {
      let mensaje = ''

      arrayCamposFalseIndex.forEach(falseIndex => {
        mensaje+= formNames[falseIndex] + ', '
        //namesFalseInputs.push(formNames[falseIndex])
      })

      window.alert(`Los campos ${mensaje} deben ser completados`)
    
    }

    return requirements

  }
  
  const handleSubmit = (e)=> {
    //debugger
      e.preventDefault()
      
      console.log(checkInputs())

      if(checkInputs()) {

        const newProdWimage = {...form,...foto}
        //console.log('FOTOOO', foto)
        if (newProdWimage.imagen){
          newProdWimage.foto = newProdWimage.imagen
          delete newProdWimage.imagen

        } else {
          newProdWimage.foto = foto
        }

        console.log(newProdWimage)
        if(form.id === null) {
          crearProductos(newProdWimage)
          Swal.fire({
            title: "¡Se agrego exitosamente!",
            icon: "success",
            draggable: true,
            background: '#18141c',
            color: '#f1f1f1',
            confirmButtonColor: '#d41c23'
          });
        } else {
          actualizarProductos(newProdWimage)
          handleReset()
        }
  /*       console.log(e.target.textContent)
        if(e.target.textContent === 'Guardar') {
          crearProductos(form)
  
        } else if(e.target.textContent === 'Editar') {
          actualizarProductos(form)
  
          handleReset()
        }   tambien podria usar esta logica*/
        handleShowModal()
      }
      
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
      setfoto(placeholderImage)
      setSrcImageBack(placeholderImage)
      
  }

  const handleEditar = ()=> {

    if(productoAEditar != null) {
      console.log(productoAEditar)
      setForm({...productoAEditar}) 
    }
  }


  return (
   <div className="formulario-alta" style={ showModal ? {visibility: "visible", opacity: "initial", transform: "scale(1)"} : {visibility: "hidden", opacity: "0", transform: "scale(0.5)"}}>
   <h2>{productoAEditar ? 'Editar' : 'Agregar'}</h2>
   <div className="close-window" onClick={handleShow}>X</div>
   <form action="">
    <div>
      <label htmlFor="lbl-nombre">Nombre</label>
      <input 
      type="text" 
      id="lbl-nombre" 
      name="nombre" 
      placeholder="Nombre del producto"
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
    {/* <div>
      <label htmlFor="lbl-foto">Foto</label>
      <input 
      type="text" 
      id="lbl-foto" 
      name="foto" 
      value={form.foto} 
      onChange={handleChange}/>
    </div> */}
    <div className="envio-input">
      <label htmlFor="lbl-envio">Envio</label>
      <input 
      type="checkbox" 
      id="lbl-envio" 
      name="envio" 
      checked={form.envio}
      onChange={handleChange}
      />
    </div>
    
    <button
    className="editar-guardar-boton"
    type="submit" 
    onClick={handleSubmit}>
    {productoAEditar ? 'Editar' : 'Guardar'}
    </button>
    <button
    className="reset-boton"
    type="reset" 
    onClick={handleReset}>
    Resetear
    </button>
  </form> 
  <DragDrop 
    setFoto={setfoto} 
    setSrcImageBack={setSrcImageBack}
    srcImageBack={srcImageBack}
  /> 
   </div>
  )
}

export default Forumulario