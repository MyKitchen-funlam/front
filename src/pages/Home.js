import React from 'react'
import { Element, Link } from 'react-scroll'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import chefsito from '../imgs/chefsito.png'
import img_aprende from '../imgs/img_aprende.png'
import img_enseña from '../imgs/img_enseña.png'

import '../styles/home.css'

const Home = () => {

    const { loginWithRedirect } = useAuth0();

  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MyKitchen</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="home_2"><Button className='content-text__btn'>Nosotros</Button></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registrarse">REGISTRARSE</Link>
                        </li>
                        <li className="nav-item">
                             <Link className='nav-link'><Button className='content-text__btn' onClick={() => loginWithRedirect()}>Log In</Button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <section className='home'>
            <div className='home_info'>
                <div className='home_text'>
                    Creatividad
                </div>
                <div className='home_img'>
                    <img src={chefsito} alt='chefsito'/>
                </div>
                <div className='home_text_2'>
                    en tu plato.
                </div>
            </div>
        </section>
        <Element className='home_2'>
            <div className='home_2_text'>
                <div className='text_aprende'>
                    <div className='info_aprender'>
                        <h2 className='aprende'>Aprende</h2>
                        <p>tómate un tiempo para disfrutar de tu <br/>
                        cocina, preparando recetas fáciles con <br/>
                        ingredientes simples o liberando tu <br/>
                        mente para explorar nuevos sabores.</p>
                    </div>
                    <div className='info_aprender'>
                        <img className='img_aprende' src={img_aprende} alt='aprende' />
                    </div>
                </div>
                <div className='text_enseña'>
                    <div className='info_enseñar'>
                        <img className='img_enseña' src={img_enseña} alt='aprende' />
                    </div>
                    <div className='info_enseñar'>
                        <h2 className='enseña'>Enseña</h2>
                        <p>tómate un tiempo para disfrutar de tu <br/>
                        cocina, preparando recetas fáciles con <br/>
                        ingredientes simples o liberando tu <br/>
                        mente para explorar nuevos sabores.</p>
                        <Button color="warning">COMIENZA AHORA</Button>
                    </div>
                </div>
            </div>
        </Element>
    </>
  )
}

export default Home