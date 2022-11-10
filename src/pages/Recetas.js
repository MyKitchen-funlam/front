import React from 'react'
import { Link } from 'react-router-dom'
import NavbarMisRecetas from '../components/NavbarMisRecetas'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

import '../styles/misrecetas.css'

const Recetas = () => {
  return (
    <>
      <NavbarMisRecetas />
      <section className='bg_recetas'>
        <div className='content_recetas'>
          <div className='recipes'>
            <div className='descrip_recipes'>
              <p>Mis recetas</p>
            </div>
            <div className='descrip_recipes'>
              <p>Mis recetas</p>
            </div>
            <div className='descrip_recipes'>
              <p>Mis recetas</p>
            </div>
            <div className='descrip_recipes'>
              <p>Mis recetas</p>
            </div>
            <div className='descrip_recipes'>
              <p>Mis recetas</p>
            </div>
            <div className='descrip_recipes'>
              <p>Mis recetas</p>
            </div>
            <div className='descrip_recipes'>
              <p>Mis recetas</p>
            </div>
          </div>
          <div className='boton_crear'>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Fab color="warning" aria-label="add">
                <Link to='/dashboard/mis-receteas/crear%receta'>
                  <AddIcon />
                </Link>
              </Fab>
            </Box>
          </div>
        </div>
      </section>
    </>
  )
}

export default Recetas