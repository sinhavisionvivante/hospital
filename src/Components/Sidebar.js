import React from 'react'
import "../App.css"
function Sidebar() {
    return (
        <div className='blue sidebar p-3'>
            <div className='mr-2'>
                <span className='logo-brand-name'>LOGO</span>
            </div>
            <div className='p-2 mt-4'>
                <div className='dashboard'>
                    <a className='list-group-item py-2 mousehover'>
                        <i class="fa fa-th-large text-white fs-5 px-3" aria-hidden="true"></i>
                        <span className='text-white'>Dashboard</span>
                    </a>
                    <a className='list-group-item py-2 mousehover'>
                        <i class="fa fa-th-large text-white fs-5 px-3" aria-hidden="true"></i>
                        <span className='text-white'>Patient</span>
                    </a>
                    <a className='list-group-item py-2 mousehover'>
                        <i class="fa fa-th-large text-white fs-5 px-3" aria-hidden="true"></i>
                        <span className='text-white'>Appoinment</span>
                    </a>
                    <a className='list-group-item py-2 mousehover'>
                        <i class="fa fa-th-large text-white fs-5 px-3" aria-hidden="true"></i>
                        <span className='text-white'>Billing</span>
                    </a>
                    <hr></hr>
                </div>
                <div className='settings'>
                    <a className='list-group-item py-2 mousehover'>
                        <i class="fa fa-life-ring text-white fs-5 px-3" aria-hidden="true"></i>
                        <span className='text-white'>Support</span>
                    </a>
                    <a className='list-group-item py-2 mousehover'>
                        <i class="fa fa-cog text-white fs-5 px-3" aria-hidden="true"></i>
                        <span className='text-white'>Setting</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
