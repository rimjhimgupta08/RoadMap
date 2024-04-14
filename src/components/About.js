import React from 'react'
import Card from './Card'
import FutureIt from './FutureIt'
import './Mediaquery.css';


const About = () => {
  return (
    <>
    <div className='container about'>
      <div className="row">
      <div className="col-md-6 image">
                  <img src="https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg" alt="" />
            </div>
            <div className="col-md-6 text">
                  <div className="info">
                  <h5 className='mt-3'>Roadmap</h5>
                        <h3>About Us Roadmap</h3>
                        <p>Hi! Everyone, This is roadmap. I know you are facing many problem to become a course and roadmap.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eaque cumque mollitia ipsa dolorem inventore libero quisquam sit praesentium. Labore non fuga cumque.</p>
                  </div>
            </div>
            
      </div>
    </div>
    <Card/>
    <FutureIt/>
    </>
  )
}

export default About