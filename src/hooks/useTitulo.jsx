import { useEffect } from "react"


const useTitulo = (textoTitulo= 'Sin titulo') => {
    useEffect(() => {
      document.title = `TWK - ${textoTitulo}`
    }, [])
    
}

export default useTitulo