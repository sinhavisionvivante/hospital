import React from 'react'

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Billing Overview</a>
                    <div className="card ">
                        <div className="card-body card-color">
                            <div className="row justify-content-between">
                                <div className="col-auto">
                                    <span className="material-symbols-outlined">
                                        arrow_forward_ios
                                    </span>
                                </div>
                                <div className="col-auto">
                                    <span>February 2021</span>
                                </div>
                                <div className="col-auto">
                                    <span className="material-symbols-outlined">
                                        arrow_back_ios
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Nav
