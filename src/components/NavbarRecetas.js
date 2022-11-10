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
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default NavbarRecetas