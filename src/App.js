import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import Home from './pages/Home';
import IniciarSesion from './pages/IniciarSesion';
import Registrar from './pages/Registrar';
import Dashboard from './pages/Dashboard';
import Recetas from './pages/Recetas';
import CrearRecetas from './pages/CrearRecetas';
import BuscarRecetas from './pages/BuscarRecetas';

function App() {
  return (
    <Auth0Provider
    domain="mykitchen-funlam.us.auth0.com"
    clientId="dFd9kG4l8s7FqZrV3AFGrDfnoB73U27H"
    redirectUri={'https://jesusrestrepo-mykitchen-funlam-front-v5v657pg79rhp647-3000.githubpreview.dev/dashboard'}
  >
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/registrarse' element={<Registrar />} />
          <Route path='/iniciar-sesion' element={<IniciarSesion/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/dashboard/mis-recetas' element={<Recetas/>} />
          <Route path='/dashboard/mis-receteas/crear%receta' element={<CrearRecetas/>} />
          <Route path='/dashboard/buscar-recetas' element={<BuscarRecetas/>} />
        </Routes>
      </Router>
    </div>
  </Auth0Provider>
    
  );
}

export default App;
