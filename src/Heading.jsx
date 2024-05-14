import React from 'react'

const Heading = () => {
  return (
    <div className="container">
   <div className='about'>
   
   <div className="about-image"><img src="../public/solution_illustrations.webp" /></div>
<div className="about-txt">
    <h1>Consolidate Payroll Processing</h1>
    <p>We have designed a fast and effective payroll system that streamlines your payment process.</p>
    <div className="proces">
        <div><i class="bi bi-file-earmark"></i><span>Tax Preparation</span></div>
        <div><i class="bi bi-heart-fill"></i><span>Payroll Processing</span></div>
        <div><i class="bi bi-lightbulb-fill"></i><span>Cost Effective</span></div>
        <div><i class="bi bi-rocket-takeoff-fill"></i><span>Scale Rapidly</span></div>
    </div>
    <button className='about-btn'>Contact Us</button>
</div>
  </div>
  </div>
   
 
  )
}

export default Heading