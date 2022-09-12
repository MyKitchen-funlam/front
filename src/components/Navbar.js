import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MyKitchen</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="#">NOSOTROS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">REGISTRARSE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">INICIAR SESIÓN</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar