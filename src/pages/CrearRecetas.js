import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import NavbarRecetas from '../components/NavbarRecetas'

import '../styles/crearrecetas.css'

const CrearRecetas = () => {
  return (
    <>
      <section className='bg_crear'>
        <NavbarRecetas />
        <div className='info__crear'>
          <div className='info__crear_text'>
            <div>
              <Box className='textarea__name'
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: 'maxwidth' },
                }}
                noValidate
                autoComplete="off"
              >
                <h3>Nombre: </h3>
                <TextField id="nombre" variant="outlined" className='txfld_nombre' size='small' fullWidth />
              </Box>
              <Box className='textarea__ingredients'
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: 'maxwidth' },
                }}
                noValidate
                autoComplete="off"
              >
                <h3>Ingredientes: </h3>
                <TextField id="nombre" variant="outlined" className='txfld_ingredientes1' size='small' fullWidth />
              </Box>
              <Box className='textarea__ingredients'
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: 'maxwidth' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="nombre" variant="outlined" className='txfld_ingredientes1' size='small' fullWidth />
              </Box>
              <Box className='textarea__steps'
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: 'maxwidth' },
                }}
                noValidate
                autoComplete="off"
              >
                <h3>Pasos: </h3>
                <TextField
                  className='txfld_pasos'
                  id="outlined-multiline-flexible"
                  multiline
                  size='small'
                  fullWidth
                />
              </Box>
            </div>
            <div className='buttons'>
              <Button variant="outlined">ACEPTAR</Button>
              <Button variant="contained" color="error">CANCELA</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CrearRecetas