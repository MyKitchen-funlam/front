import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillSetting } from "react-icons/ai"

import '../styles/navbar.css'

const NavbarDashboard = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link"><FaUserAlt size='2em'/>username</a>
                    </li>
                </ul>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <form class="d-flex">
                                <input
                                    class="form-control me-2"
                                    type="search"
                                    placeholder="Buscar"
                                    aria-label="Search" 
                                />
                                <button class="btn btn-outline-warning" type="submit">Buscar</button>
                            </form>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link"><AiFillSetting size='2em'/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavbarDashboard