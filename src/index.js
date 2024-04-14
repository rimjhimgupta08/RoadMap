import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Slider from './components/Slider';
import About from './components/About';
import Contact from './components/Contact';
import Frontend from './components/Frontend';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"",
        element: <Slider/>
      },
       {
        path:"about",
        element:<About/>

      },
       {
        path:"contact",
        element:<Contact/>

      },
      {
        path:"courses",
        element:<Frontend/>

      },
      
      // {
      //   path="/login">
      //     {isLoggedIn ? (
      //       <Redirect to="/" />
      //     ) : (
      //       <LoginForm onLogin={handleLogin} />
      //     )}
      // }
    ] 
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
