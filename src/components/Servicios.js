import React from 'react'
import { useState } from 'react'
import { webDesing } from './data-tech/techonologies';

import { ListTech } from './ListTech';
import { backend } from './data-tech/techonologies';
import { others } from './data-tech/techonologies';
import { frontEnd } from './data-tech/techonologies';

export const Servicios = () => {

    const [techonologies] = useState(webDesing);
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
                <h2>Front-End Framework</h2>
                <p>I can develop for you best pages with these frontEnd Frameworks</p>
                <ListTech tech={frontEnd}/>
            </article>
        </section>
        <section className='services'>
            <article className='service'>
                <h2>CRM Salesforce</h2>
                <p>Others technologies that I know, it's knowledge about Salesforce CRM, I have a Expeditioner level in Salesforce and I can develop in this CRM if you need it.</p>
                <ListTech tech={others}/>
            </article>
        </section>
        <section className='services'>
            <article className='service'>
                <h2>SPA Design</h2>
                <p>I will make a SPA page for you.</p>
            </article>
        </section>
    </div>
  )
}
