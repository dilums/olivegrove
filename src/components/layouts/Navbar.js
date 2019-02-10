import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Cart, Menu } from './SVGs'
class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="container">
        <div className="row">
        <div className="col d-flex justify-content-between align-items-center nav-bar">
        <Link to="/"><img src="/olivegrove/images/navlogo.png" alt="" className="navlogo"/></Link>
       <span className="navbar-links">
         <Link to="/">{Menu} Menu</Link>
         <Link to="/order">{Cart} Cart</Link>
       </span>
        </div>
        </div>
        </div>
      </nav>
    )
  }
}
export default Navbar