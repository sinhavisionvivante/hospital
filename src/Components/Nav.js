import React from 'react'

function Nav() {
    return (
        <div>
          <nav class="navbar navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Billing Overview</a>
                    <div class="card">
                        <div className="date_time">
                            <span className='lt_gt'>&lt;</span>
                            <span>February 2021</span>
                            <span className='lt_gt'>&gt;</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
