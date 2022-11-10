import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaHistory } from 'react-icons/fa'
import { AiFillSetting } from "react-icons/ai"
import { useAuth0 } from "@auth0/auth0-react"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Button from '@mui/material/Button'

import '../styles/navbar.css'


const NavbarDashboard = () => {

    const theme = createTheme({
        palette: {
          secondary: {
            main: '#212121',
          },
        },
      });

    const { user, isAuthenticated, isLoading} = useAuth0();
    const { logout } = useAuth0();

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
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <form className="d-flex">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Buscar"
                                    aria-label="Search" 
                                />
                                <button className="btn btn-outline-warning" type="submit">Buscar</button>
                            </form>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <ThemeProvider theme={theme}>
                                <Button color='secondary' onClick={() => logout({ returnTo: window.location.origin })}>
                                    Log Out
                                </Button>
                            </ThemeProvider>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavbarDashboard