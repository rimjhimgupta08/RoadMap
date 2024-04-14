import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';


const data = [
  {
    id: 1,
    img: 'image/card1.png',
    name: 'HTML',
    title: 'Hyper Text Markup language use for Struture of web page.',
  },
  {
    id: 2,

    img: '/image/card2.png',
    name: 'CSS',
    title: 'Cascading Style Sheet use for style component like Color text etc...',
  },
  {
    id: 3,

    img: '/image/card3.png',
    name: 'JavaScript',
    title: 'JavaScript is a programming language use for logic building.'
  },
  {
    id: 4,

    img: '/image/card5.jpg',
    name: 'Node JS',
    title: 'Node js is use for backend technology some use additional backend data have.'
  },
  {
    id: 5,

    img: './image/card6.png',
    name: 'Express JS',
    title: 'Express JS is backend technology framework use of database connected.'
  },
  {
    id: 6,

    img: '../image/card4.png',
    name: 'React JS',
    title: 'React JS is a library of JavaScript work with components'
  },
]
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // eslint-disable-next-line
      style={{ ...style, display: "block", background: "purple", color: "black", borderRadius: "50%", height: "25px", width: "25px", fontSize: "40px", display:"flex", justifyContent: "center", alignItems: "center" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // eslint-disable-next-line
      style={{ ...style, display: "block", background: "purple", color: "black", borderRadius: "50%", height: "25px", width: "25px",display:"flex", justifyContent: "center", alignItems: "center"  }}
      onClick={onClick}
    />
  );
}

const Card = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className='container card-slide'>

      <Slider {...settings}>
        {
          data.map((d) => (
            <div className='bg-dark mt-5 rounded text-light card text-center' >
              <div className='rounded d-flex justify-content-center align-items-center bg-light p-2 image'>
                <img className='rounded-circle' src={d.img} alt="" />
              </div> 
              <div className='pt-3 pb-3'>
              <h4>{d.name}</h4>
                <p>{d.title}</p>
                
              </div>
            </div>

          ))
        }
      </Slider>
    </div>


  )
}

export default Card