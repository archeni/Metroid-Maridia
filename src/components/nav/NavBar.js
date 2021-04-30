import React from "react"
import { Link } from "react-router-dom"
import './NavBar.css'
import samusLogo from '../../images/cute-samus.png';

export const NavBar = (props) => {
  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
      <img src={samusLogo} alt='samus logo'/>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/">Games</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/myLibrary">My Library</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/messages">Messages</Link>
        </li>
      </ul>
    </nav>
  )
}
