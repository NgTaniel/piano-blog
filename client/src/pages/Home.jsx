import React from 'react';
import './Home.css';
import Piano from '../images/animepiano.png'

function Home() {
  return (
    <>
    <div className='home-header'>
      <h1>Home</h1>
      <p>Hello and welcome to the Piano Blog</p>
      <p>In this website, you will witness different types of pianos and keyboards, in terms of appearances, materials as well as having some opinions from owners (inspired by Google Reviews) on their experiences and perhaps influential enough to purchase that instrument.</p>
      <p>But! The Choice is yours and Happy playing! :))</p>
    </div>

    <img src={Piano} 
      style={{
        height: '50%',
        width: '50%',
        paddingTop: '1vw',
    }} alt='piano'/>
    </>
  )
}

export default Home