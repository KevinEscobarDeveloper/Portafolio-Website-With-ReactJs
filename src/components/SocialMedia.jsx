import React from 'react'
import frontend from "../icons/social-media/frontend.png"

export const SocialMedia = () => {
  return (
    <div className='social-media'>
        <h1> You can follow my passion clicking in these links</h1>
        <ul >
          <div className="figure">
            <li> <a href='https://www.frontendmentor.io/profile/KevinEscobarDeveloper' target="_blank" rel='noopener noreferrer'>Frontend Mentor</a> <img  src={require("../icons/social-media/frontend.png")} alt=''/></li>
          </div>
          <div className="figure"><li> <a href='https://github.com/KevinEscobarDeveloper' target="_blank" rel='noopener noreferrer'>Github</a> <img  src={require("../icons/social-media/github.png")} alt=''/></li></div>
          <div className="figure"><li> <a href='https://www.linkedin.com/in/kevin-escobar-8443b7227/' target="_blank" rel='noopener noreferrer'>Linkedin</a> <img  src={require("../icons/social-media/linkedin.png")} alt=''/></li></div>
          <div className="figure"><li> <a href='https://www.tiktok.com/@keng_dev?lang=es' target="_blank" rel='noopener noreferrer'>Tiktok</a> <img  src={require("../icons/social-media/tiktok.png")} alt=''/></li></div>
          <div className="figure"><li> <a href='https://www.youtube.com/channel/UCmrqFbVLEcyx8NkR1oEobuQ' target="_blank" rel='noopener noreferrer'>Youtube</a> <img  src={require("../icons/social-media/youtube.png")} alt=''/> </li></div>
        </ul>
    </div>
  )
}