import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import NavbarRecetas from '../components/NavbarRecetas'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import '../styles/crearrecetas.css'

const theme = createTheme({
  palette: {
    secondary: {
      main: '#fafafa',
    },
  },
});

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
              <ThemeProvider theme={theme}>
                <Button variant="contained" color='secondary'>ACEPTAR</Button>
              </ThemeProvider>
              <Link to='/dashboard'><Button className='ml-3' variant="contained" color="error">CANCELAR</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CrearRecetas