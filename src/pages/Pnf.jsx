import React from 'react'
import { Link } from 'react-router-dom'


const Pnf = () => {
  return (
    <>
     <div style={{paddingTop:'100px'}} className='d-flex justify -content-center  align-items-center flex-column'>

    <img width={'500px'} height={'300px'} src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="" />
    <Link style={{textDecoration:"none"}} className='bg-primary p-2 text-white rounded' to={'/'}>Home</Link>
    </div>
    </>
  )
}

export default Pnf