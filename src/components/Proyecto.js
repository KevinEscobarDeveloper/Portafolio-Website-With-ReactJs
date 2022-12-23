import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {
    const [proyecto, setProyecto] = useState({});
    const params = useParams();
    useEffect(()=>{
        let proyecto = trabajos.filter(trabajo => trabajo.nombre === params.nombre);
        setProyecto(proyecto[0]);
    }, [params.nombre]);

  return (
    <div className='page page-work'>
    <h1 className='heading'>Proyecto: {params.nombre}</h1>
    <div className='mask'>
                  <img src={"/images/"+proyecto.id+".png"} alt=""/>
    </div>
    <p>Tecnologías: {proyecto.tecnologias}</p>
    <p>Descripción: {proyecto.descripcion}</p>
    <a href={proyecto.url} >Ir al proyecto</a>
    
</div>
  )
}
