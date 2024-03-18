import React, { useState } from 'react'
import './slider.css';
import MarqueeCard from './MarqueeCard';
import Marque from './Marque';

const images = [
      " https://media.geeksforgeeks.org/wp-content/uploads/20230406110516/Roadmap-for-Frontend-Development.webp",
      " https://www.alexhyett.com/static/backend_developer_roadmap_blog_d191863879-fad31cf1ff70473162e496d779a6fbbd.jpg",
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201204213538/How-to-Become-Data-Scientist.png ",
      " https://www.xenonstack.com/hubfs/mlops-roadmap-for-interpretability.png"

]

function Slider() {
      let [curr, setCurr] = useState(0);

const nextImage = () =>{
      setCurr(curr===images.length-1? 0: curr+1);
}
const prevImage = () =>{
      setCurr(curr===0? images.length-1: curr-1)
}




      return (
            <>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                              
                              {
                                    images.map((value, index) => 
                                    curr===index && <div class="carousel-inner">
                                    <div className="carousel-item active">
                                          <img src={value} className="d-block w-100" alt="..." />
                                    </div>
                              </div>
                                    )
                              
                              }


                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={prevImage}>
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                              </button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={nextImage}>
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                              </button>
                        </div>
                        <Marque/>
                        <MarqueeCard/>
            </>
      )
}

export default Slider