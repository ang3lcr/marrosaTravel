import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import WhiteLogo from '../assets/media/logoWhite.png'
import '../styles/navbar.css'

const NavBar = () => {


    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        }

        window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
    }, []);





  return (
    <div className={`NavBar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <p className='navbar-title'>Marrosa Travel</p>
        </div>
        <ul className='navbar-elements'>
          <li className='navbar-element'>
            <Link to="home" smooth duration={500}>Inicio</Link>
          </li>
          <li className='navbar-element'>
            <Link to="about" smooth duration={500}>Nosotros</Link>
          </li>
          <li className='navbar-element'>
            <Link to="travels" smooth duration={500}>Viajes</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar