import React from 'react'
import "../App.css"
function Sidebar() {
  return (
    <div className='blue sidebar p-3'>
        <div className='mr-2'>
            <span className='logo-brand-name'>LOGO</span>
        </div>
        <div className=''>
            <a className='list-group-item py-2'>
                <i className='speedmetter fs-4 me-2'></i>
                <span className='text-white'>Dashboard</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='speedmetter fs-4 me-2'></i>
                <span className='text-white'>Patient</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='speedmetter fs-4 me-2'></i>
                <span className='text-white'>Appoinment</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='speedmetter fs-4 me-2'></i>
                <span className='text-white'>Billing</span>
            </a>
            <hr></hr>
        </div>
        <div>
        <a className='list-group-item py-2'>
                <i className='speedmetter fs-4 me-2'></i>
                <span className='text-white'>Support</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='speedmetter fs-4 me-2'></i>
                <span className='text-white'>Setting</span>
            </a>
        </div>
     {/* <h2 className='logo'>LOGO</h2>
     <div>
        <p>Dashboard</p>
        <p>Patient</p>
        <p>Appoinment</p>
        <p>Billing</p>
     </div>
     <div>
        <p>Support</p>
        <p>Setting</p>
     </div> */}
    </div>
  )
}

export default Sidebar
