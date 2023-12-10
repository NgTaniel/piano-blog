import React from 'react'
import './Grand.css'
import GrandChart from '../images/grandchart.jpg'
import GrandPiano from '../images/grand.jpg'

function Grand() {
  return (
    <>
    <div className='grand-header'>
      <h1>Grand</h1>
      <p>This is what every pianist would love to have in their household, whether for them to sense the environment on the public stage or to upscale their practice on some of the hardest pieces that has been composed in history.</p>
    </div>

    <div className='grand-info'>
      <p>Grand pianos are common across public, local and international stages, as pianists love the tones it produces as well as hearing the tones ringing out when its lid is opened. From the grand piano's design, the lower notes are heavier to press down compared to the higher notes, because of the thicker strings and hammers needed to produce each tone for the lower notes before it reduces as we move up along the keys.</p>
      <ul>
        <li>Unfortunately, as beautiful it is, the size and cost of this product is not viable for everyone learning or professionally playing piano</li>
        <li>There are many variants of the grand piano family, including the Baby Grand, Standard Grand and Extended Grand. These are often around 154cm wide which includes all 88 keys found in all acoustic pianos.</li>
        <li>Baby Grands are more viable if you are able to purchase and accomodate it in your household, where it is up to 180cm long</li>
        <li>Standard Grands are often 206cm long, which is common across stages in local communities and tutoring centers, as well as in examination facilities</li>
        <li>Extended Grands are the most premium of all grands, where you may find one or two in the examination facility that you are sent to for your examinations, but it is unlikely it is necessary for grade levels and booking for the rooms containing these exquisite pianos. These 240cm long instruments are often found on the international stage and competitions, which you can find via Youtube searches for your interests. Personally, would not recommend it as a household instrument for practicing or as a pasttime.</li>
      </ul>
    </div>
    <br/>
    <img src={GrandChart} alt='grandchart' style={{
      width: '25%',
      height: '25%',
      paddingRight: '1vw'
    }}/>
    <img src={GrandPiano} alt='grandpiano' style={{
      width: '25%',
      height: '25%'
    }}/>
    </>
  )
}

export default Grand