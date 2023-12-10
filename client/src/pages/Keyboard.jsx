import React from 'react'
import './Keyboard.css'
import ShortKeyboard from '../images/shortkeyboard.jpg'
import StandardKeyboard from '../images/stdkeyboard.jpg'

function Keyboard() {
  return (
    <>
    <div className='keyboard-header'>
      <h1>Keyboard</h1>
      <p>Next we have our keyboard, perhaps the best thing to have to start learning or playing pieces whether as a pasttime or lower grade exam preparation</p>
    </div>

    <div className='keyboard-info'>
      <p>This instrument is a suitable product to begin your piano practice or instrumental playing journey, where you either have an electric keyboard with fewer keys or an acoustic keyboard with the full quantity of 88 black and white keys</p>
      <h3>Electric Keyboard (Smaller)</h3>
      <p>You may find these products in various music stores or high school music classrooms, where the price ranges around a hundred for it be reasonable enough for schools like mine to be able to purchase 20-30 of them to allow students to begin their musical education. Here are some key information:</p>
      <ul>
        <li>Can have as few as 61 keys in total</li>
        <li>Normally purchased at around a hundred, which is good if you are on a budget. Major facilities like schools could purchase multiple products</li>
        <li>Easy but heavy to carry around</li>
        <li>As mentioned in the miniKeyboard page, refer to that page to recap the key names</li>
      </ul>
      <br/>
      <img src={ShortKeyboard} 
        alt='shortkeyboard' 
        style={{
          width: '20%',
          height: '20%'
        }}/>
      <br/>
      <h3>Digital Keyboard (Standard)</h3>
      <p>If you are looking to begin your professional playing journey, this will be a suitable product for you where you have the full set of 88 keys to explore. This like all digital and electric keyboards are made of plastic and hence feels light when pushed down to produce the sounds you want.</p>
      <ul>
        <li>Contains the full set of 88 keys, which is the expected amount for the acoustic pianos</li>
        <li>Often requires some assembling</li>
        <li>Plastic keys resulting in a lighter touch and different sound quality</li>
        <li>Provided with in-built pedals to sustain or ring out the notes</li>
      </ul>
      <br/>
      <img src={StandardKeyboard} 
        alt='standardkeyboard' 
        style={{
          width: '20%',
          height: '20%'
        }}/>
    </div>
    </>
  )
}

export default Keyboard