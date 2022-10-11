import React from 'react'
import { Link } from 'react-router-dom'

const Recetas = () => {
  return (
    <>
    <div>Mis Recetas</div>
    <Link to='/mis-receteas/crear%receta'>ir a crear recetas</Link>
    </>
  )
}

export default Recetas