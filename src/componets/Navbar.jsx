import React from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
   
    
    <input type="checkbox" name='' id='chk'className='hide-btn' />
    <label htmlFor="chk" className='show-btn' >
    <i className="fa fa-bars" id='chk' style={{marginLeft:"20px",marginRight:"20px",marginTop:"10px"}}></i></label>
    <label htmlFor="chk" className='hide-btn'><i className='fa fa-times'></i></label>
    
   
    <div className="sidebar">
       <div style={{borderBottom:" 1px solid gray"}}>
       <div className="profile" >
            <h6>Hello Nitin</h6>
            <i className="fa-solid fa-user"></i>
        </div>
            <h5>My Account</h5>
       </div>
       <ul class="sidebar-nav" id="sidebar-nav">

       <Link to ="nav" class="nav-item" >
  <i class="fa-solid fa-language"></i>
    <span style={{color:"black"}} className="boxmargin">language</span>
  </Link>
 <br />
 <br />
 <a href='https://www.rootmit.com/'  class="nav-item"><i class="fa-solid fa-globe"></i></a>
    <span  style={{color:"black"}}>Go to website</span>
  <br />
  <br />
  <Link to ="nav" class="nav-item mt-5" >
  <i class="fa-solid fa-home"></i>
    <span style={{color:"black"}}>Home</span>
  </Link>
 <br />
 <br />
 <Link to ="dashbord" class="nav-item" >
  <i class="fa-solid fa-dashboard"></i>
    <span style={{color:"black"}}>dashboard</span>
  </Link>
  <br />
  <br />

 <Link to ="quick" class="nav-item" >
  <i class="fa-solid fa-file"></i>
    <span style={{color:"black"}}>Quike Setup</span>
  <br />
  <br />
  </Link>
 <Link to ="payment" class="nav-item" >
  <i class="fa-solid fa-file"></i>
    <span style={{color:"black"}}>payments</span>
  </Link>
  <br />
  <br />
  
<li class="nav-item">
  <li class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
    <i class="bi bi-layout-text-window-reverse"></i><span>Sales</span><i class="bi bi-chevron-down ms-auto"></i>
  </li>
  <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
    <Link to="nav">
      
        <i class="bi bi-circle"></i><span>Order</span>
     
    </Link>
    <li>
      <a href="tables-data.html">
        <i class="bi bi-circle"></i><span>calender</span>
      </a>
    </li>
  </ul>
</li>

<li class="nav-item">
  <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
    <i class="bi bi-bar-chart"></i><span>Marketing</span><i class="bi bi-chevron-down ms-auto"></i>
  </a>
  <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
    <li>
      <a href="charts-chartjs.html">
        <i class="bi bi-circle"></i><span>Discound</span>
      </a>
    </li>
    <li>
      <a href="charts-apexcharts.html">
        <i class="bi bi-circle"></i><span>Campign</span>
      </a>
    </li>
   
  </ul>
</li>

<li class="nav-item">
  <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
    <i class="bi bi-gem"></i><span>Stock</span><i class="bi bi-chevron-down ms-auto"></i>
  </a>
  <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
    <li>
      <a href="icons-bootstrap.html">
        <i class="bi bi-circle"></i><span>Products</span>
      </a>
    </li>
    <li>
      <a href="icons-remix.html">
        <i class="bi bi-circle"></i><span>Services</span>
      </a>
    </li>
   
  </ul>
</li>



<li class="nav-item">
  <a class="nav-link collapsed" href="users-profile.html">
    <i class="bi bi-person"></i>
    <span>Patener and sevices</span>
  </a>
</li>
<li class="nav-item">
  <a class="nav-link collapsed" href="pages-faq.html">
    <i class="bi bi-question-circle"></i>
    <span>Reports</span>
  </a>
</li>
</ul>
       
    </div>
    </>
  )
}
