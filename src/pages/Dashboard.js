import React from 'react'
import NavbarDashboard from '../components/NavbarDashboard'
import { HiUsers } from 'react-icons/hi'

import '../styles/dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  return (
    <>
    <NavbarDashboard/>
    <div className='square_profile'>
      <div className='icon_users'>
        <HiUsers size='fullwidth'/>
      </div>
      <div className='botones'>
        <div className='button-buscar'>
          <Link to='/dashboard/buscar-recetas'><button className="btn btn-warning">Buscar receta</button></Link>
        </div>
        <div className='button-crear'>
          <Link to='/dashboard/mis-receteas/crear%receta' className='but_crear'><button className="btn btn-warning">Crear receta</button></Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard