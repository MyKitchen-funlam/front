import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaHistory } from 'react-icons/fa'
import { AiFillSetting } from "react-icons/ai"

import '../styles/navbar.css'

const NavbarMisRecetas = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link"><FaUserAlt size='2em' />  Mis recetas</a>
                            <ul>
                                <li className='nav-item'>
                                    <Link to='/dashboard/mis-recetas' className='nav-link'>Mis recetas  <FaUserAlt /></Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/mis-recetas' className='nav-link'>Historial  <FaHistory /></Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link"><AiFillSetting size='2em' /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarMisRecetas