import React from 'react'
import { Button } from 'reactstrap'
import Navbar from '../components/Navbar'

import chefsito from '../imgs/chefsito.png'
import img_aprende from '../imgs/img_aprende.png'
import img_enseña from '../imgs/img_enseña.png'

import '../styles/home.css'

const Home = () => {
  return (
    <>
        <section className='home'>
            <Navbar />
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
        <section className='home_2'>
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
        </section>
    </>
  )
}

export default Home