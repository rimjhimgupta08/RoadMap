import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './slider.css';
import { useNavigate } from 'react-router-dom';


const Register = () => {
      const navigate= useNavigate();
      const [input, setInput] = useState({
            name: "",
            email: "",
            password: "",
      });
      const handlesubmit = (e) =>{
            e.preventDefault();
            localStorage.setItem('user', JSON.stringify(input));
            navigate('/login');
      }
      return (
            <div className='container login-form mt-4'>
                  <div className="row">
                        <div className="col-md-6 image">
                              <img src="https://img.freepik.com/free-vector/private-data-concept-illustration_114360-5135.jpg" alt="" width="450px" />
                        </div>
                        <div className="col-md-6 input mt-5">
                              <h3>SignUp Form</h3>
                              <form onSubmit={handlesubmit}>
                                    <label htmlFor="exampleInputName">Name:-
                                          <input required
                                                name='name' value={input.name} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })} type="text" placeholder='Enter your Name' />
                                    </label>
                                    <label htmlFor="exampleInputEmail1">Email-ID:-
                                          <input required
                                          name='email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })}
                                           type="email" placeholder='Enter your Email' />
                                    </label>
                                    <label htmlFor="exampleInputPassword">Password:-
                                          <input required
                                          name='password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })}
                                           type="password" placeholder='Enter your Password' />
                                    </label> <br />
                                    <p>If already have an account click here <Link to="/login">Login</Link></p>
                                    <button type='submit'>SignUp</button>
                                    <button type='cleartext'>Clear</button>
                              </form>
                        </div>
                  </div>

            </div>
      )
}

export default Register;