import React from 'react';
import './MiniKeyboard.css';
import Mini from '../images/mini.jpg'
import KeyNames from '../images/keyboard-name.jpg'

function miniKeyboard() {
  return (
    <>
      <div className='mini-header'>
        <h1>Mini Keyboard</h1>
        <p>Let's work our way up by size, starting off with the mini keyboard!</p>
      </div>

      <div className='mini-info'>
        <p>Despite its miniature size and appearance, this like every other instrument will still have its uses in terms of learning or gifting this for young children. Some learnings include: </p>
        <ul>
          <li>Knowing the shapes of the keys (black and white) and their corresponding names</li>
          <li>Listening to how each key sounds like</li>
          <li>The white key names are letters A, B, C, D, E, F, G before returning back to 'A' and the sequence repeats itself towards the end of the instrument</li>
          <li>The black key names are A-sharp/B-flat, C-sharp/D-flat, D-sharp/E-flat, F-sharp/G-flat, G-sharp/A-flat. These keys normally lie between two white keys, where they can be interpreted as two different names but produce the same sound</li>
        </ul>
        <br/>
        <img src={Mini} 
          alt='mini' 
          style={{
            paddingRight: '2vw'
        }}/>
        <img src={KeyNames}
          alt='name'
          style={{
            height: '20%',
            width: '20%'
          }}/>
        <br/>
        <p>However, this is only as far on what you can do with this instrumental product, you may be able to use this proficiently in a band or collaborative compositions but otherwise I personally would not recommend this if you want to learn classical or difficult pieces that requires a wider instrument</p>
      </div>
    </>
  )
}

export default miniKeyboard