import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import '../styles/buscarrecetas.css'

const BuscarRecetas = () => {
  return (
    <>
      <section className='background_buscar'>
        <div className='search__recipes'>
          <div className='ingredientes_seleccionados'>
            <h2 className='titulo_recetas'>Ingredientes seleccionados:</h2>
            <div className='seleccion'>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: 'fullwidth' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="seleccion"
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="seleccion"
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="seleccion"
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="seleccion"
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="seleccion"
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="seleccion"
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="seleccion"
                />
              </Box>
            </div>
          </div>
          <div className='seleccion_ingredientes_y_muestra'>
            <div className='buscar'>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '90%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  sx={{
                    input: {
                      color: "black",
                      background: "white"
                    }
                  }}
                  fullWidth
                  required
                  label="Buscar"
                  id="outlined-required"
                />
              </Box>
            </div>
            <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: 'maxwidth' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  sx={{
                    input: {
                      color: "black",
                      background: "white"
                    }
                  }}
                  fullWidth
                  required
                  label="Buscar"
                  id="outlined-required"
                />
                <TextField
                  sx={{
                    input: {
                      color: "black",
                      background: "white"
                    }
                  }}
                  fullWidth
                  required
                  label="Buscar"
                  id="outlined-required"
                />
                <TextField
                  sx={{
                    input: {
                      color: "black",
                      background: "white"
                    }
                  }}
                  fullWidth
                  required
                  label="Buscar"
                  id="outlined-required"
                />
                <TextField
                  sx={{
                    input: {
                      color: "black",
                      background: "white"
                    }
                  }}
                  fullWidth
                  required
                  label="Buscar"
                  id="outlined-required"
                />
              </Box>
          </div>
        </div>
      </section>
    </>
  )
}

export default BuscarRecetas