import React from 'react'

export default function Quick() {
  return (
    <div class="col-10 offset-1 mt-5">
    <div className="card ">
        <div className="card-header color-dark">Lets get you started</div>
        <div className="body mt-2">
           <div className="d-flex ">
           <i className='fa fa-file' style={{marginLeft:"20px"}}></i>
            <p  style={{marginLeft:"20px"}}>Upload Products & Inventory</p>
           </div>
           <hr  style={{width:"96%", marginLeft:"30px",marginRight:"20px"}}/>
           <div className="d-flex ">
           <i className='fa fa-user' style={{marginLeft:"20px"}}></i>
            <p  style={{marginLeft:"20px"}}>Update List of Customers</p>
           </div>
           <hr  style={{width:"96%", marginLeft:"30px",marginRight:"20px"}}/>
           <div className="d-flex ">
           <i className='fa fa-user' style={{marginLeft:"20px"}}></i>
            <p  style={{marginLeft:"20px"}}>Send Campaign to Customers</p>
           </div>
           <hr  style={{width:"96%", marginLeft:"30px",marginRight:"20px"}}/>
           <div className="d-flex ">
           <i className='fa fa-user' style={{marginLeft:"20px"}}></i>
            <p  style={{marginLeft:"20px"}}>Add Users</p>
           </div>
           <hr  style={{width:"96%", marginLeft:"30px",marginRight:"20px"}}/>
           <div className="d-flex ">
           <i className='fa fa-user' style={{marginLeft:"20px"}}></i>
            <p  style={{marginLeft:"20px"}}>Delivery Setup</p>
           </div>
        </div>
    </div>
    </div>
  )
}
