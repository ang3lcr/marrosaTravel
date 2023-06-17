import React from 'react'
import '../styles/about.css'
import Background from '../assets/media/aboutBackground3.jpg'
import WhiteLogo from '../assets/media/logoWhite.png'
import BlackLogo from '../assets/media/logoBlack.png'

const About = () => {
  return (
    <div name="about" className='About'>
      <div className="about-container">
      {/* <img src={Background} className='about-background resize-img'/> */}
      <div className="about-text">
        <div className="about-overlay"></div>
        <h1 className='h1-about title'>Sobre nosotros</h1>
        <p className='about-paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit modi pariatur neque quos tempore fuga, maxime labore a quas quasi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, rem. Eos facere accusantium, possimus eaque, vero quas a quos blanditiis nemo nisi fuga autem. Ea aperiam rerum provident nostrum recusandae.
        </p>
      </div>
      <img src={WhiteLogo} alt="" className='about-logo'/>
      </div>
       
    </div>
  )
}

export default About