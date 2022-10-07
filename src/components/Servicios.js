import React from 'react'

export const Servicios = () => {
  return (
    <div className='page'>
        <h1 className='heading'>Servicios</h1>
        
        <section className='services'>
            <article className='service'>
                <h2>Diseño web</h2>
                <p>Diseño de la maquetación de la pagina web</p>
            </article>
        </section>
        <section className='services'>
            <article className='service'>
                <h2>Programación Back-End</h2>
                <p>Programación Back-End según los requisitos del negocio</p>
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
    </div>
  )
}
