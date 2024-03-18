import React from 'react'
import Marquee from 'react-fast-marquee'
import './slider.css';


const MarqueeCard = () => {
  return (
    <div className="container cards">
      <Marquee autoFill>
        <div className="card">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230406110516/Roadmap-for-Frontend-Development.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="title">
              <div className="heading">
                <h5 className="card-title">Cali</h5>
                <p>Ascoott Rafles Place</p>
              </div>

            </div>


          </div>
        </div>
        <div className="card">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230406110516/Roadmap-for-Frontend-Development.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="title">
              <div className="heading">
                <h5 className="card-title">Cali</h5>
                <p>Ascoott Rafles Place</p>
              </div>

            </div>


          </div>
        </div>
        <div className="card">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230406110516/Roadmap-for-Frontend-Development.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="title">
              <div className="heading">
                <h5 className="card-title">Cali</h5>
                <p>Ascoott Rafles Place</p>
              </div>

            </div>


          </div>
        </div>
        <div className="card">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230406110516/Roadmap-for-Frontend-Development.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="title">
              <div className="heading">
                <h5 className="card-title">Cali</h5>
                <p>Ascoott Rafles Place</p>
              </div>

            </div>


          </div>
        </div>
      </Marquee>
    </div>
  )
}

export default MarqueeCard