import React from 'react'
import {Link} from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
        <h1>
            Hola soy Kevin Escobar, <strong>desarrollador web</strong> Junior, 
            ofrezco mis servicios de programación FullStack usando 
            el stack MERN.
        </h1>
        <h2 className='title'>
            Te ayudo a crear tu sitio o aplicación web usando
            tecnologías actuales. <Link to="/contacto">Contacta conmigo.</Link> 
        </h2>

        <section className='last-works'>
            <h2 className='heading'> Alguno de mis proyectos</h2>
            <p>Estos son alguno de mis trabajos de desarrollo web</p>
            <ListadoTrabajos limite="2"/>
        </section>
    </div>
  )
}
