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
    redirectUri={'https://jesusrestrepo-mykitchen-funlam-front-p6rj6q7g45qhr4gw-3000.githubpreview.dev/dashboard'}
  >
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/registrarse' element={<Registrar />} />
          <Route path='/iniciar-sesion' element={<IniciarSesion/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/mis-recetas' element={<Recetas/>} />
          <Route path='/mis-receteas/crear%receta' element={<CrearRecetas/>} />
          <Route path='buscar-recetas' element={<BuscarRecetas/>} />
        </Routes>
      </Router>
    </div>
  </Auth0Provider>
    
  );
}

export default App;
