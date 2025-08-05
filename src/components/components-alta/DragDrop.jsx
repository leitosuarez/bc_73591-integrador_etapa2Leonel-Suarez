import React from 'react'
import './DragDrop.scss'
import { peticionesHttp } from '../../helpers/peticiones-http'

const DragDrop = ({setFoto, setSrcImageBack, srcImageBack}) => {

  //canvelando comportamiento por defecto de lnavegador
  const arrayEventosDragDrop = ['dragenter', 'dragleave', 'dragover', 'drop']
  
  arrayEventosDragDrop.forEach(eventName => {
    //console.log(eventName)
    document.body.addEventListener(eventName, e => e.preventDefault())
  })

  const handleDrop = (e)=>{
    
    const files = e.dataTransfer.files
    handleFiles(files)
    //console.log(e)
    //console.log(e.dataTransfer.files[0])
  }

  const handleChange = (e)=>{
    
      const files = e.target.files
      handleFiles(files)
      //console.log(e)
      //console.log(files)
  }

  const handleFiles= async(files)=>{
    console.log('recibi los files', files)
    const file = files[0]
    await uploadFile(file)
    previewFile(file)
  }

  const uploadFile = async(file)=>{
    console.log('llego a upload', file)
    

    const url = import.meta.env.VITE_BACKEND_UPLOAD
   

    try {
      const formData = new FormData() /* https://developer.mozilla.org/en-US/docs/Web/API/FormData */
      formData.append('imagen',file) /* key,value */
       const options = {
      method:'POST',
      body: formData
    }

      const imageUp = await peticionesHttp(url,options)
      setFoto(imageUp)
      console.log(imageUp)

    } catch (error) {
      console.log('[uploadFile]', error)
    }

    
  }

  const previewFile = (file)=>{
    console.log('llego a preview', file)
    const reader = new FileReader() /* OBJ BOM -> API READER LEER */ 
    reader.readAsDataURL(file) /* a partir del archivo binario creo la url para que pueda previsualizar  */
    /* Espero hasta que el archivo se halla leido por completo */
    reader.addEventListener('loadend', ()=>{
        setSrcImageBack(reader.result)
    })
  }
  
  const srcImagen = srcImageBack

  return (
    <div
      className="drop-area"
      onDrop={handleDrop}
    >
      <p>
        Subir imagen al servidor con <b>File Dialog</b> o con
        <b> drag and drop </b> dentro del área punteada.
      </p>
      
      <div className='drop-area_input'>
      <input
        type="file"
        id="lbl-foto"
        accept="image/*"
        onChange={handleChange}
      />

      <label className="drop-area_button" htmlFor="lbl-foto">
        File Dialog
      </label>
      </div>

      <div className="drop-area-image">
        {srcImagen && <img src={srcImageBack} alt="Imagen seleccionada" />}
      </div>
    </div>
  );

}


export default DragDrop