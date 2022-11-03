import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaHistory } from 'react-icons/fa'
import { AiFillSetting } from "react-icons/ai"
import { useAuth0 } from "@auth0/auth0-react"

import '../styles/navbar.css'

const NavbarRecetas = () => {

    const { user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading){
        return <div>Loading...</div>
    }

  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {isAuthenticated ? (
                            <>
                                <a className="nav-link"><FaUserAlt size='2em'/>  {user.name}</a>
                            </>
                        ) : (
                            <>
                                <a className="nav-link"><FaUserAlt size='2em'/>  username</a>
                            </>
                        )}
                        <ul>
                            <li className='nav-item'>
                                <Link to='/dashboard/mis-recetas' className='nav-link'>Mis recetas  <FaUserAlt/></Link>
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
                            <a className="nav-link"><AiFillSetting size='2em'/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavbarRecetas