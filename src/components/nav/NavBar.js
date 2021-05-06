import React from "react"
import { Link, useHistory } from "react-router-dom"
import './NavBar.css'
import samusLogo from '../../images/cute-samus.png';

export const NavBar = () => {
  const history = useHistory()

  const handleLogout = () => {
    sessionStorage.clear()
    history.push('/Login')
  }

  return (
    <nav className="navbar">
      <div className='navHolder'>
        <img src={samusLogo} alt='samus logo'/>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Games</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/myLibrary">My Library</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/messages">Messages</Link>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={handleLogout}>Logout</span>
          </li>
        </ul>
      </div>
      <hr></hr>
    </nav>
  )
}
