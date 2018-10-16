import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const Nav = ({searchFunction, searchTerm})=> (
  <nav className="container-fluid">
    <ul className="nav-list col-lg-10">
    <li className="nav-list-item nav-title">AncientGamer</li>
    <li className="nav-list-item"> PlayStation </li>
    <li className="nav-list-item"> Dreamcast </li>
    <li className="nav-list-item"> GameCube </li>
    <li className="nav-list-item">SNES </li>
    <li className="nav-list-item"> Nintendo 64 </li>
  </ul>
  <div className="col-lg-2">
    <input type="text" onChange={searchTerm}/>
    <button type="submit" onClick={searchFunction} className="btn"> Search </button>
  </div>
</nav>
)

export default Nav;
