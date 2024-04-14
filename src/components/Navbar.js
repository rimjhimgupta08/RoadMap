import React  from 'react'
import { Link, NavLink } from 'react-router-dom';

function Navbar () {
  
  
  // const userName =  JSON.parse(localStorage.getItem('user'));
  return (
    
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-1  rounded">
  <div className="container">
    <Link className="navbar-brand" to="/"><img src="./image/it.jpeg" alt="" width='80px' /></Link>

    // <p className='text-center'>Welcome - {userName.name}</p>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent ">
      <ul className="navbar-nav me-5 ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/contact" >Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/courses" >Courses</NavLink>
        </li>
       
        
        {/* <div>
      <h1>Welcome, {username}!</h1>
      <button onClick={onLogout}>Logout</button>
    </div> */}
      </ul>
      
    </div>
    
  </div>
  
</nav>
    
  )
}


export default Navbar
