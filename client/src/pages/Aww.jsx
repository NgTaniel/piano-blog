import React from 'react';
import './Aww.css';
import Cat1 from '../images/cat1.jpg';
import Cat2 from '../images/cat2.jpg';
import Cat3 from '../images/cat3.jpg';
import Cat4 from '../images/cat4.jpg';

function Aww() {
  return (
    <>
      <div className='aww-header'>
        <h1>Aww 😭</h1>
      </div>
      <div className='aww-para'>
        <p>Well... you can choose to either let your cattos be, or find something to keep your pianos unscathed...</p>
      </div>
      <img src={Cat1} className='catto' alt='cat1'/>
      <img src={Cat2} className='catto' alt='cat2'/>
      <img src={Cat3} className='catto' alt='cat3'/>
      <img src={Cat4} className='catto4' alt='cat4'/>
    </>
  )
}

export default Aww