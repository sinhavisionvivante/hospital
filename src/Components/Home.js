import React from 'react'
import Nav from './Nav'
import Billing from './Billing'

const Home = () => {
    return (
        <div className='px-9'>
            {/* <Nav></Nav> */}
            <div className='container fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-md-3'>
                        <div class="search">
                            <i class="fa fa-search"></i>
                            <input type="text" class="form-control" placeholder="Search Patient" />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='list-appointement'>
                            <p>Make an Appoinment</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='list-appointement'>
                            <p>Add Patient</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='list-appointement'>
                            <p>Notification</p>
                        </div>
                    </div>
                </div>
            </div>
            <Nav/>
            <Billing/>
        </div>
    )
}

export default Home
