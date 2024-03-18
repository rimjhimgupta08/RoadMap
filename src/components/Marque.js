import React from 'react'
import Marquee from 'react-fast-marquee'
import './slider.css';


const Marque = () => {
  return (
    <div className="container marquee">
      <h2 className='text-center my-3'>Feature have it</h2>
      <h4 className='text-center my-3'>All Roadmaps Here..</h4>
      <Marquee autoFill>
        <div className='marquee-slide  shadow-lg p-3 mb-5 bg-black rounded'>
          Tailwind
        </div>
        <div className='marquee-slide  shadow-lg p-3 mb-5 bg-black rounded'>
          React JS
        </div>

        <div className='marquee-slide  shadow-lg p-3 mb-5 bg-black rounded'>
          HTML
        </div>
        <div className='marquee-slide  shadow-lg p-3 mb-5 bg-black rounded'>
          CSS
        </div>
        <div className='marquee-slide  shadow-lg p-3 mb-5 bg-black rounded'>
          Bootstrap
        </div>
        <div className='marquee-slide  shadow-lg p-3 mb-5 bg-black rounded'>
          NextJS
        </div>
        <div className='marquee-slide  shadow-lg p-3 mb-5 bg-black rounded'>
          Express
        </div>
        <div className='marquee-slide  shadow-lg p-3 mb-5 bg-black rounded'>
          MongoDB
        </div>
      </Marquee>
      <Marquee autoFill>
        <div className='marquee-slide  shadow-lg p-3 mb-5 bg-black rounded'>
          Web Development
        </div>
        <div className='marquee-slide  shadow-lg p-3 mb-5 bg-black rounded'>
          Data Science
        </div>
        <div className='marquee-slide  shadow-lg p-3 mb-5 bg-black rounded'>
          Backend Development
        </div>
        <div className='marquee-slide  shadow-lg p-3 mb-5 bg-black rounded'>
          Frontend Development
        </div>
        <div className='marquee-slide  shadow-lg p-3 mb-5 bg-black rounded'>
          Machine Learning
        </div>
        <div className='marquee-slide  shadow-lg p-3 mb-5 bg-black rounded'>
          Full Stack Development
        </div>
        <div className='marquee-slide  shadow-lg p-3 mb-5 bg-black rounded'>
          Web Design
        </div>
        </Marquee>

    </div>
  )
}

export default Marque