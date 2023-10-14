import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {
    const[vehicleDetails,SetVehicleDetails]=useState(
        {
            vehiclenum:"",
            model:"",
            brand:"",
            manfyear:"",
            color:"",
            ownername:"",
            address:"",
            phNum:"",
            email:"",
            username:"",
            password:"",
            confirmpassword:"",
            image:""
        }
    )
    const readVehicleDetails=(event)=>{
        SetVehicleDetails({...vehicleDetails,[event.target.name]:event.target.value})
    }
    

    const DisplayDetails=()=>{
        console.log(vehicleDetails)
        const appLink="http://127.0.0.1:8000/api/register/"
        axios.post(appLink,vehicleDetails).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="Sucessfully Registered")
                
                {
                    alert("Sucessfully Registered")
                    SetVehicleDetails({

                        vehiclenum:"",
                        model:"",
                        brand:"",
                        manfyear:"",
                        color:"",
                        ownername:"",
                        address:"",
                        phNum:"",
                        email:"",
                        username:"",
                        password:"",
                        confirmpassword:"",
                        image:""

                    })
                }
            }

        )
    }

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vehicle Number</label>
                                <input type="text" name="vehiclenum" value={vehicleDetails.vehiclenum} className="form-control" onChange={readVehicleDetails} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Model</label>
                                <input type="text" name="model" value={vehicleDetails.model} className="form-control" onChange={readVehicleDetails} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Brand</label>
                                <input type="text" name="brand" value={vehicleDetails.brand} className="form-control" onChange={readVehicleDetails} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Manufature Year</label>
                                <input type="date" name="manfyear" value={vehicleDetails.manfyear} id="" className="form-control" onChange={readVehicleDetails}/>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Color</label>
                                <input type="text" name="color" value={vehicleDetails.color} className="form-control" onChange={readVehicleDetails} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Owner Name</label>
                                <input type="text" name="ownername" value={vehicleDetails.ownername} className="form-control" onChange={readVehicleDetails} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea name="address" value={vehicleDetails.address} id="" cols="30" rows="4" className="form-control" onChange={readVehicleDetails}></textarea>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="text" name="phNum" value={vehicleDetails.phNum} className="form-control" onChange={readVehicleDetails}/>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">User name</label>
                                <input type="text" name="username" value={vehicleDetails.username} className="form-control" onChange={readVehicleDetails} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Email</label>
                                <input type="text" name="email" value={vehicleDetails.email} className="form-control" onChange={readVehicleDetails} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Password</label>
                                <input type="passwordt" name="password" value={vehicleDetails.password} className="form-control" onChange={readVehicleDetails} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Confirm Password</label>
                                <input type="password" name="confirmpassword" value={vehicleDetails.confirmpassword} className="form-control" onChange={readVehicleDetails} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Image</label>
                                <input type="text" name="image" value={vehicleDetails.image} className="form-control" onChange={readVehicleDetails}/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={DisplayDetails} className="btn btn-primary">Register</button>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <a href="/">Back to Login</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Register