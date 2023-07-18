import React from 'react'
import Nav from './Nav'
import Billing from './Billing'

const Home = () => {
    return (
        <div className='px-9'>
            <div className='container fluid'>
                <div className='row my-2'>
                    <div className='d-flex justify-content-between'>
                        <div className='w-50'>
                            <div class="form-group has-search">
                                <span class="fa fa-search form-control-feedback"></span>
                                <input type="text" class="form-control" placeholder="Search" />
                            </div>
                        </div>
                        <div className='d-flex gap-4 align-items-center'>
                            <p className="m-0 list-appointement">Make an Appointment</p>
                            <p className="m-0 list-appointement">Add Patient</p>
                            <p className="m-0 text-white notification"><i class="fa fa-bell" aria-hidden="true"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <Nav />
            <Billing />
        </div>
    )
}

export default Home
