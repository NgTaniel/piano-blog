import React from 'react'
import './Upright.css'
import ShortUpright from '../images/108upright.jpg'
import StandardUpright from '../images/132upright.jpg'

function Upright() {
  return (
    <>
    <div className='upright-header'>
      <h1>Upright</h1>
      <p>Next we have our upright piano, perhaps the most common and favourable acoustic instrument for your household to start learning or playing pieces whether as a hobby or mid-professional exam preparation</p>
    </div>

    <div className='upright-info'>
      <p>Upright pianos have been developed and manufactured for decades by many international companies such as Yamaha, Kawai, Beale, Kohler & Campbell and many more. These vary in dates through certain serial numbers, where the lower the number the older your instrument is. Here are some key features of this instrument:</p>
      <ul>
        <li>Varies in height from 109m to 150m, the taller the piano the higher sound quality the keys produce. You can partially open the lid of the piano top to allow your piece to ring out depending on your environment, although it is recommended to close immediately after finishing your playing to reduce dust buildup</li>
        <li>Commonly used and purchased for pianists preparing for examinations or professional playing</li>
        <li>Every upright regardless of the height will always have the standard keys quantity of every acoustic piano (88 black and white keys)</li>
        <li>The sound quality also varies amongst each piano manufacturer, where it is said that the European companies like 'Kohler & Campbell' pianos produce warmer and broader tones whilst Asian companies like 'Yamaha' pianos create lighter and crispier tones, but the preference is yours</li>
        <li>As we start from the Upright and onto the Grands, the keys are constructed with wood and ivory coating instead of plastic. This requires a bit more force to push each key and produce its sound</li>
      </ul>
      <p>On the left image below is what a 108/109cm high upright looks like along on the right image below, a 132cm high upright.</p>
    </div>
    <br/>
    <img src={ShortUpright} 
      alt='shortupright'
      style={{
        height: '30%',
        width: '30%',
        paddingRight: '1vw'
      }}/>

    <img src={StandardUpright} 
      alt='standardupright'
      style={{
        height: '30%',
        width: '30%'
      }}/>
    </>
  )
}

export default Upright