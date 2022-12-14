import React from 'react'
import { useState } from 'react'
import { webDesing } from './data-tech/techonologies';

import { ListTech } from './ListTech';
import { backend } from './data-tech/techonologies';
import { others } from './data-tech/techonologies';

export const Servicios = () => {

    const [techonologies,setTech] = useState(webDesing);
  return (
    <div className='page'>
        <h1 className='heading'>Servicios</h1>
        
        <section className='services'>
            <article className='service'>
                <h2>Web design</h2>
                <p>I help you to create responsive web pages.</p>
                <ListTech tech={techonologies}/>
            </article>
        </section>
        <section className='services'>
            <article className='service'>
                <h2>Back-End</h2>
                <p>I will make the back-end of your web page following the web standard of the development of API-REST.</p>
                <ListTech tech={backend}/>
            </article>
        </section>
        <section className='services'>
            <article className='service'>
                <h2>Diseño SPA</h2>
                <p>Navegación basada en aplicación de página única para una mejor experiencia</p>
            </article>
        </section>
        <section className='services'>
            <article className='service'>
                <h2>Posicionamiento web</h2>
                <p>Mejor posicionamiento en busquedas de google</p>
            </article>
        </section>
        <section className='services'>
            <article className='service'>
                <h2>CRM Salesforce</h2>
                <p>Others technologies that I know, it's knowledge about Salesforce CRM, I have a Expeditioner level in Salesforce and I can develop in this CRM if you need it.</p>
                <ListTech tech={others}/>
            </article>
        </section>
    </div>
  )
}
