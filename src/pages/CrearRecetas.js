import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import NavbarRecetas from '../components/NavbarRecetas'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import '../styles/crearrecetas.css'
import axios from 'axios'

const theme = createTheme({
  palette: {
    secondary: {
      main: '#fafafa',
    },
  },
});

const CrearRecetas = () => {

  const [recetas, setRecetas] = useState({
    nombre: '',
    ingredientes: '',
    pasos: '',
  })

  const handleChange = (e) => {
    setRecetas({
      ...recetas,
      [e.target.name]: e.target.value
    })
    console.log(recetas);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('nombre: ' + recetas.nombre + ' ingredientes: ' + recetas.ingredientes + " pasos: " + recetas.pasos);
    const options = {
      method: 'POST',
      url: 'http://localhost:5000/producto/nuevo',
      headers: { 'Content-Type': 'application/json' },
      data: {
        nombre: recetas.nombre,
        ingredientes: recetas.ingredientes,
        pasos: recetas.pasos
      },
    };
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('receta agregada con éxito!');
        window.location = '/dashboard'
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error creando receta');
      })
  }

  return (
    <>
      <section className='bg_crear'>
        <NavbarRecetas />
        <div className='info__crear'>
          <div className='info__crear_text'>
            <form onSubmit={handleSubmit}>
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
                  <TextField type='text' id="nombre" name='nombre' variant="outlined" className='txfld_nombre' size='small' fullWidth onChange={handleChange} />
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
                  <TextField type='text' id="ingredientes" name='ingredientes' variant="outlined" className='txfld_ingredientes1' size='small' fullWidth onChange={handleChange} />
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
                    id="pasos"
                    name='pasos'
                    multiline
                    size='small'
                    fullWidth
                    type='text'
                    onChange={handleChange}
                  />
                </Box>
              </div>
              <div className='buttons'>
                <ThemeProvider theme={theme}>
                  <Button type='submit' variant="contained" color='secondary'>ACEPTAR</Button>
                </ThemeProvider>
                <Link to='/dashboard'><Button className='ml-3' variant="contained" color="error">CANCELAR</Button></Link>
              </div>
              <ToastContainer
                position="bottom-center"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
              />
            </form>

          </div>
        </div>
      </section>
    </>
  )
}

export default CrearRecetas