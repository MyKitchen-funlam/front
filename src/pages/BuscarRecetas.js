import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { obtenerRecetas } from '../utils/api'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'

import '../styles/buscarrecetas.css'

const BuscarRecetas = () => {

  const [ingredientes, setIngredientes] = useState("");
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [recetas, setRecetas] = useState([]);

  const handleChange = (e) => {
    setIngredientes(e.target.value);
  }

  const handleSearch = async () => {

    try{
      const response = await obtenerRecetas(ingredientes);
      console.log(response);
      setRecetas(response);
    } catch(error){
      console.error(error);
    }
  } 

  return (
    <>
      <section className='background_buscar'>
        <div className='search__recipes'>
          <div className='buscar'>
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
                value={ingredientes}
                name='ingredientes'
                id="outlined-required"
                onChange={handleChange}
              />
            </Box>
            <button onClick={handleSearch}>Buscar</button>
          </div>
          <div>
            {recetas.map(
              ( recetas ) => (
                <div  className="result">
                  <Link to={`/dashboard/buscar-recetas/id=${recetas._id}`}>
                    <DatoReceta key={nanoid()} recetas={recetas} setEjecutarConsulta={setEjecutarConsulta} />
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  )
}

const DatoReceta = ({ recetas }) => {
  console.log('id desde datoproducto: ', recetas._id);

  return (
      <>
        <h3>{recetas.nombre}</h3>
      </>
  )
}

export default BuscarRecetas