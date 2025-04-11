import './Header.scss'
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"

const Header = () => {
  return (
    
    <header className="main-header">
      <input type="checkbox" id="menu"/>
      
      <NavBar/>
      <SearchBar/>


    </header>
    
  )
}

export default Header