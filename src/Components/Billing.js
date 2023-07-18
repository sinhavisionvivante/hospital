import React from 'react'
import { useState } from 'react';

function Billing() {
    const [users] = useState([
        {
            name: 'abinash', age: 25, gender: "Male", billno: "6534334", date: "02/02/2023, 06:23 PM", receipt: "8234384663", userServiceData: [
                { servicename: 'Consulation', price: '500', quantity: '1', amount: '500' },
                { servicename: 'Salute', price: '6200', quantity: '7', amount: '6200' },
            ],
        },
        {
            name: 'ujjwal', age: 30, gender: "Male", billno: "6534334", date: "02/02/2023, 06:23 PM", receipt: "8234384663", userServiceData: [
                { servicename: 'XRay', price: '1500', quantity: '1', amount: '1500' },
            ],
        },
        {
            name: 'abhishek', age: 40, gender: "Male", billno: "6534334", date: "02/02/2023, 06:23 PM", receipt: "8234384663", userServiceData: [
                { servicename: 'BD', price: '700', quantity: '1', amount: '700' },
                { servicename: 'Paramedical', price: '9700', quantity: '12', amount: '1700' },
            ],
        },
        {
            name: 'nitin', age: 30, gender: "Male", billno: "6534334", date: "02/02/2023, 06:23 PM", receipt: "8234384663", userServiceData: [
                { servicename: 'Radiology', price: '1200', quantity: '1', amount: '1200' },
            ],
        },
        {
            name: 'nikita', age: 40, gender: "Male", billno: "6534334", date: "02/02/2023, 06:23 PM", receipt: "8234384663", userServiceData: [
                { servicename: 'Cardiology', price: '400', quantity: '1', amount: '400' },
            ],
        },
    ]);

    const [userData, setUserData] = useState(null);
        const handleClickUser = (user) => {
        setUserData(user)
    }
    return (
        <div>
            <div className="row">
                <div class="col-sm-4">
                    {users.map((user, index) => (
                        <div className="card cusor-pointer mb-3" onClick={() => handleClickUser(user)}>
                            <div className="card-content">
                                <div className="card border-0">
                                    <div className="media align-items-stretch card-color p-2">
                                        <div className="align-self-center">
                                            <img width="60px" height="70px" className='image-side' src="assets/man.jpeg" />
                                        </div>
                                        <div className="media-body">
                                            <p className="mb-0">{user.name}</p>
                                            <span className="mb-0">{user.age}, {user.gender}</span><br />
                                            <span>Bill No {user.billno}</span>
                                        </div>
                                        <div className="align-self-center">
                                            <i className="icon-wallet success font-large-2"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div class="col-sm-8">
                    <div class="card border-0">
                        <div class="card-body p-4">
                            <div className='border-radious'>
                                <nav class="navbar navbar-light">
                                    <div class="container-fluid mx-4 my-2">
                                        <h3 class="navbar-brand fw-bold">Billing Details</h3>
                                        <div>
                                            <p className='list-appointement'>Print Bill</p>
                                        </div>
                                    </div>
                                </nav>
                                <div >
                                    {userData && (
                                        <div className='d-flex justify-content-between list-color'>
                                            <div>
                                                <p>Patient Name</p>
                                                <p>{userData.name}</p>
                                            </div>
                                            <div>
                                                <p>Age/Gender</p>
                                                <p>{userData.gender}</p>
                                            </div>
                                            <div>
                                                <p>Bill No</p>
                                                <p>{userData.billno}</p>
                                            </div>
                                            <div>
                                                <p>Date/ Time</p>
                                                <p>{userData.date}</p>
                                            </div>
                                            <div>
                                                <p>Receipt No</p>
                                                <p>{userData.receipt}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Sr.no</th>
                                                <th scope="col">Service Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Amount</th>
                                            </tr>
                                        </thead>
                                        {userData && (
                                            <tbody>
                                                {userData.userServiceData.map((service, index) => (
                                                    <tr key={index} className='border'>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{service.servicename}</td>
                                                        <td>{service.price}</td>
                                                        <td>{service.quantity}</td>
                                                        <td>{service.amount}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        )}
                                    </table>
                                    <div className='list-color mt-5'>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <p>Mobile Number</p>
                                                <p>Tax</p>
                                                <p>Discount</p>
                                            </div>
                                            <div>
                                                <p>9327167743</p>
                                                <p>200</p>
                                                <p>50</p>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <p>Total</p>
                                            </div>
                                            <div>
                                                <p>9327167743</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billing
