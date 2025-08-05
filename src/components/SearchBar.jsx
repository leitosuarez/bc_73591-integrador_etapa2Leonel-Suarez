import { Link } from 'react-router'
import './SearchBar.scss'
import {useContext, useEffect, useState} from 'react'
import CarritoContext from '../contexts/CarritoContext'
const SearchBar = () => {
  
  const {carrito} = useContext(CarritoContext)
  console.log(carrito)

  const [cambioEstado, setCambioEstado] = useState(false)

  useEffect(() => {
    //debugger
    animacion()
    setTimeout(()=>{setCambioEstado(false)}, 1000)
  }, [carrito])


  const animacion = ()=> {
    cambioEstado ? setCambioEstado(false) : setCambioEstado(true)
  
  }

  const handleSearch = (e)=>{
      e.preventDefault()
  }
  

 
  return (
    <div className="search-bar">
    <div className="search-bar__logo-container"></div>
    <form action="#" className="search-bar__form-container">
      <label htmlFor="busqueda" className="search-bar__form-label"><i className="fa-solid fa-magnifying-glass fa-xl"></i></label>
      <input type="search" id="busqueda" className="search-bar__form-search" placeholder="Buscar Aqui"/>
      <button type="submit" className="search-bar__form-submit" onClick={handleSearch}>Buscar</button>
    </form>
    <Link to='/carrito' className="search-bar__carrito-container"><i className={!cambioEstado ? 'fa-solid fa-cart-shopping fa-2xl' : "fa-solid fa-cart-shopping fa-2xl fa-bounce"}></i> {/* <p>Cart</p> */} </Link>
    <div className="menu-toogle">
      
      <label htmlFor="menu" className="menu-toogle__label" >
        <span className="menu-toogle__top-bread"></span>
        <span className="menu-toogle__meat"></span>
        <span className="menu-toogle__bottom-bread"></span>
      </label> 
    </div>
  </div> 
  )
}

export default SearchBar