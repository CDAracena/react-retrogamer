import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'
import {Link} from 'react-router-dom';


const Nav = ({searchFunction, searchTerm})=> (
  <nav className="container-fluid">
    <ul className="nav-list col-lg-12">
    <li className="nav-list-item nav-title"><Link to='/'>AncientGamer </Link></li>
    <li className="nav-list-item"> <Link to='/playstation'>PlayStation </Link></li>
    <li className="nav-list-item"> <Link to="/dreamcast">Dreamcast </Link></li>
    <li className="nav-list-item"> <Link to="/gamecube">GameCube </Link> </li>
    <li className="nav-list-item"> <Link to="/snes"> SNES </Link> </li>
    <li className="nav-list-item"> <Link to="/nintendo64">Nintendo 64 </Link></li>
    <li className="searchDiv">  <div className="searchBar">
        <input type="text" onChange={searchTerm} className="form-control col-lg-6"/>
        <button type="submit" onClick={searchFunction} className="btn searchBtn"> Search </button>
      </div></li>
  </ul>
</nav>

)


export default Nav;
