import React from 'react'
import './slider.css';


const Contact = () => {
  
  
  
  return (
    <div className="container my-5 contact">
    <div className="row">
      <div className="col-md-6">
      <img src="https://blog.sparkhire.com/wp-content/uploads/2014/08/3-Reasons-to-Always-Be-Networking-840x576.jpg" alt="" width='500px' />
      </div>
      <div className="col-md-6">
        <div className="form">
          <h2>Enter Details Here</h2>
          <form >
          <label htmlFor="">First Name:
            <input type="text" placeholder='Enter Your First Name'/>
            </label>
          <label htmlFor="">Last Name:

            <input type="text" placeholder='Enter Your Last Name'/>
            </label>
            <label htmlFor="">Email:
            <input type="email"  placeholder='Enter Your Email'/> 
            </label><br />
            <label htmlFor="">Message: <br />
            <textarea name="" id="" cols="30" rows="5" placeholder='Enter Your Quiry'></textarea>
            </label>
            
            <input type="submit"  />
          </form>
        </div>
      </div>
    </div>
    
      </div>

  )
}

export default Contact