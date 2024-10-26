import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
     <div style={{height:'300px'}} className=' mt-5 w-100 bg-primary'>
      <div className="d-flex justify-content-evenly ">
        <div style={{width:"400px"}} className="intro mt-5">
        <Link style={{textDecoration:"none", color:"white",fontWeight:"600"}} to={'/'}> 
        <i class="fa-solid fa-bowl-rice fa-lg me-4" style={{color: "#f5f5f5"}}></i>{' '}
             Plate Chronicels
          </Link>
          <p className='mt-3 text-white'>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p className='text-white'>Code licensed MIT, docs CC BY 3.0.</p>
          <p className='text-white'>Currently v5.3.3.</p>
        </div>
        <div className='mt-5'>
          <h2 className="text-white" style={{fontWeight:"600",fontSize:"20px"}}>Links</h2>
          <Link style={{textDecoration:"none", color:"white",}} to={'/'}> 
              Landing Page
          </Link> <br />
          <Link style={{textDecoration:"none", color:"white",}} to={'/home'}> 
              Home Page
          </Link><br />
          <Link style={{textDecoration:"none", color:"white",}} to={'/history'}> 
              Watch History Page
          </Link>
        </div>
        <div className='mt-5'>
          <h2 className="text-white" style={{fontWeight:"600",fontSize:"20px"}}>Guides</h2>
          <Link style={{textDecoration:"none", color:"white",}} to={''}> 
              React
          </Link> <br />
          <Link style={{textDecoration:"none", color:"white",}} to={''}> 
              React Bootstrap
          </Link><br />
          <Link style={{textDecoration:"none", color:"white",}} to={''}> 
              React Router
          </Link>
        </div>
        <div className="contact mt-5">
        <h2 className="text-white" style={{fontWeight:"600",fontSize:"20px"}}>Contact Us</h2>
        <input type="text" placeholder='Enter your email here' style={{height:"40px",border:"none"}} className='rounded  text-center' />
        <i className="fa-solid fa-arrow-right p-3 bg-secondary rounded  ms-1 " style={{height:"40px", color:"white"}}></i>
        <br />
        <div className='d-flex text-white  justify-content-evenly mt-3'>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-solid fa-phone"></i>
        </div>
       
        </div>
      </div>
      <p className='text-center mt-3 text-white'>Copyright & copy ; June 2024 Batch, Plate Chronicels. Buildt with React. </p>
    </div>
    
    
    </>
  )
}

export default Footer