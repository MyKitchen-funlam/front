import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import NavbarDashboard from '../components/NavbarDashboard'
import { HiUsers } from 'react-icons/hi'

import '../styles/dashboard.css'

const Dashboard = () => {

    const { logout } = useAuth0();

  return (
    <>
    <NavbarDashboard/>
    <div className='square_profile'>
      <div className='icon_users'>
        <HiUsers size='fullwidth'/>
      </div>
      <div className='botones'>
        <div className='button-buscar'>
          <button class="btn btn-warning">Buscar receta</button>
        </div>
        <div className='button-crear'>
          <button class="btn btn-warning">Crear receta</button>
        </div>
      </div>
    </div>
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
    </>
  )
}

export default Dashboard