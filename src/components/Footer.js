import React from 'react'
import './slider.css';
import './Mediaquery.css';

const Footer = () => {


      
  return (
      
      <footer>
      <div className="container my-5 footer">
            <div className="row">
                  <div className="col-md-4 col-sm-6">
                  <img src="./image/it.jpeg" alt=""  width="200px" height="200px" className='rounded-circle'
                  />
                  </div>
                  <div className="col-md-8">
                        <div className="row">
                              <div className="col-md-4 col-sm-6">    
                              <h2>Courses here</h2>
                              <li>Frontend Development</li>
                              <li>Backend Development</li>
                              <li>Data Scientist</li>
                              <li>AI ML Learning</li>


                              </div>
                              <div className="col-md-4 col-sm-6">
                              <h2>Quick Links</h2>
                              <li>Home</li>
                              <li>About </li>
                              <li>Courses</li>
                              <li>Contact</li>

                                    
                              </div>
                              <div className="col-md-4 col-sm-6">
                              <h2>Get in touch  </h2>
                              <li>rimjhimgupta786@gmail.com</li>
                              <li>facebook</li>
                              <li>Github</li>
                              <li>Linkedin</li>
                              <li>Instagram</li>

                                    
                              </div>
                        </div>

                  </div>
            </div>
      </div>
      </footer>
  )
}

export default Footer