import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const Nav = ({searchFunction, searchTerm})=> (
  <nav className="container-fluid">
    <ul className="nav-list col-lg-12">
    <li className="nav-list-item nav-title">AncientGamer</li>
    <li className="nav-list-item"> PlayStation </li>
    <li className="nav-list-item"> Dreamcast </li>
    <li className="nav-list-item"> GameCube </li>
    <li className="nav-list-item">SNES </li>
    <li className="nav-list-item"> Nintendo 64 </li>
    <li className="nav-list-item">  <div className="searchBar">
        <input type="text" onChange={searchTerm} className="form-control col-lg-6"/>
        <button type="submit" onClick={searchFunction} className="btn searchBtn"> Search </button>
      </div></li>
  </ul>
</nav>
)

export default Nav;
