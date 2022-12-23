import React from 'react'
import {Link} from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <div className='text'>
        <h1>
            Hi My name is Kevin Escobar I'm, <strong>Full Stack Web Developer</strong> I offer you
            services with MERN Stack, also I know others technologies like Php-Laravel.
        </h1>
        </div>
        <h2 className='title'>
            I can help you to create modern web pages. <Link to="/contacto">Contact with me.</Link> 
        </h2>

        <section className='last-works'>
            <h2 className='heading'> These are some of my personal projects</h2>
            <p>These are some of my personal projects make in courses and projects for show you that I know.</p>
            <ListadoTrabajos limite="2"/>
        </section>
    </div>
  )
}
