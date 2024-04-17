import React from 'react'
import { Link } from 'react-router-dom';
import './slider.css';


const Frontend = () => {
  return (
    <>
      <div className="container frontend">
      <h2 className='text-center mb-4 '>Full Stack Development</h2>
      <div className="row">
      <div className="col-md-6 front">

            <h2>Frontend Development</h2>
            <h3>HTML <span><Link href="">Read More</Link></span></h3>
            <i class="fa-solid fa-arrow-down"></i>
            <h3>CSS <span><Link href="">Read More</Link></span></h3>
            <i class="fa-solid fa-arrow-down"></i>
            <h3>JavaScript <span><Link href="">Read More</Link></span></h3>
            <i class="fa-solid fa-arrow-down"></i>
            <h2>JavaScript Framework</h2>
            <h3>React JS <span><Link href="">Read More</Link></span></h3>
            <h3>Angular JS <span><Link href="">Read More</Link></span></h3>
            <h3>Vue JS <span><Link href="">Read More</Link></span></h3>
            <i class="fa-solid fa-arrow-down"></i>
            <h2>CSS Framework</h2>
            <h3>Tailwind CSS <span><Link href="">Read More</Link></span></h3>
            <h3>Bootstrap <span><Link href="">Read More</Link></span></h3>
            <i class="fa-solid fa-arrow-down"></i>
            <h2>Internet </h2>
            <h3>HTTP/Domain <span><Link href="">Read More</Link></span></h3>
            <h3>Browser Work <span><Link href="">Read More</Link></span></h3>
            <i class="fa-solid fa-arrow-down"></i>
            <h2>Version Control</h2>
            <h3>Git <span><Link href="">Read More</Link></span></h3>
            <h3>Github <span><Link href="">Read More</Link></span></h3>
            </div>
            <div className="col-md-6 backend">
                  <h2>Backend Development</h2>
                  <h3>Node JS <span><Link href="">Read More</Link></span></h3>
                   <i class="fa-solid fa-arrow-down"></i>

                  <h3>Express JS <span><Link href="">Read More</Link></span></h3>
                  <i class="fa-solid fa-arrow-down"></i>
                  <h3>Mongo DB <span><Link href="">Read More</Link></span></h3>
                  <h3>MySQL <span><Link href="">Read More</Link></span></h3>
                  <i class="fa-solid fa-arrow-down"></i>
                  <h3>REST API <span><Link href="">Read More</Link></span></h3>
                  <i class="fa-solid fa-arrow-down"></i>
                  <h3>Testing <span><Link href="">Read More</Link></span></h3>

            </div>
      </div>

      </div>
    </>
  )
}

export default Frontend