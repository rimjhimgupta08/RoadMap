import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './slider.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
      const navigate = useNavigate();
      const [input, setInput] = useState({
            
            email: "",
            password: "",
      });
      const handlelogin = (e) =>{
            e.preventDefault();
            const loggeduser = JSON.parse(localStorage.getItem('user'));
            if(input.email === loggeduser.email && input.password === loggeduser.password){
                  localStorage.setItem('loggedin', true)
                  navigate('/courses');
            }else{
                  alert("wrong email and password");
            }
      }
  return (
    <div className='container login-form mt-4'>
    <div className="row">
      <div className="col-md-6 image">
      <img src="https://img.freepik.com/free-vector/private-data-concept-illustration_114360-5135.jpg" alt="" width="450px" />
      </div>
      <div className="col-md-6 input mt-5">
            <h3>Login Form</h3>
            <form onSubmit={handlelogin} >
            
            <label htmlFor="exampleInputEmail">Email-ID:-
                  <input 
                  name='email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })}
                   type="email"  placeholder='Enter your Email'/>
            </label>
            <label htmlFor="exampleInputPassword">Password:-
                  <input 
                  name='password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })}
                   type="password"  placeholder='Enter your Password'/>
            </label> <br />
            <p>If you not have an account so click here <Link to="/register">SignUp</Link></p>
            <button type='submit'>Login</button>
            </form>
      </div>
    </div>

    </div>
  )
}

export default Login