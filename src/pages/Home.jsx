import React from 'react'
import videoHome from "../assets/media/homeVideo4.mp4"
import '../styles/home.css'



const Home = () => {
  return (
    <div name="home" className='Home'>
        <video src={videoHome} autoPlay loop muted id='video-home'></video>
        <div id="video-overlay"></div>
        <div className="home-content">
          <h1 className='h1-home title' >Marrosa Travel</h1>
          <h2 className='h2-home subtitle'>Agencia de viajes</h2>
        </div>
    </div>
  )
}

export default Home