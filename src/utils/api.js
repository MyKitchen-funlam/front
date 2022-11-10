import axios from 'axios'

export const obtenerRecetas = async (ingredientes) => {
  const options = { 
    method: 'GET', 
    params: {ingredientes},
    url: 'http://localhost:5000/productos/recetas',
  };
  try{
    const response = await axios(options);
    return response.data;

  } catch(error){
    Promise.reject(error);
  }
  
};

export const RecetaElegida = async (id, successCallback, errorCallback) => {
  const options = {
      method: 'GET',
      headers: { 'content-Type': 'application/json' },
      url: `http://localhost:5000/recetas/${id}`,
    };
    await axios.request(options)
    .then(successCallback)
    .catch(errorCallback);
};