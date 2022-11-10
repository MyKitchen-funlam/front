import React, {useEffect, useState, useRef} from 'react'
import { useParams } from 'react-router-dom'
import { RecetaElegida } from '../utils/api'

import '../styles/recetaseleccionada.css'


const RecetaSeleccionada = () => {

  const isMounted = useIsMounted();
  let { id } = useParams();
  const [recetas, setrecetas] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isMounted.current){
      const fetchrecetas = async () => {
        setLoading(true);
        setEjecutarConsulta(false);
        await RecetaElegida(
          id,
          (response) => {
            console.log('la respuesta que se recibio fue', response);
            setrecetas(response.data);
            setLoading(false);
            console.log('producto traido' ,recetas.nombre)
          },
          (error) => {
            console.error('Salio un error:', error);
            setLoading(false);
          }
        );
      };
      console.log('consulta', ejecutarConsulta);
      if (ejecutarConsulta) {
        fetchrecetas();
      }
    }
    
  }, [ejecutarConsulta, recetas, id, isMounted]);
      
  useEffect(() => {
    //obtener lista de vehículos desde el backend
    setEjecutarConsulta(true);
  }, []);

  return (
      <>
        <section className='seleccion_receta'>
          <div className='receta_traida'>
            <div className='receta_traida_text'>
              <h1>{recetas.nombre}</h1>
              <div className='descripcion_recetas'>
                <h3 className='h3'>Ingredientes:</h3>
                <p>{recetas.ingredientes}</p>
                <h3 className='h3'>Pasos:</h3>
                <p>{recetas.pasos}<br /></p>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}

const useIsMounted = () => {
const isMounted = useRef(false);
useEffect(() => {
  isMounted.current = true;
  return () => (isMounted.current = false);
}, []);
return isMounted;
};

export default RecetaSeleccionada