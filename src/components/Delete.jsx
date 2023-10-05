import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const Delete = () => {
    const [DeleteVehicleDetails,SetDeleteVehicleDetails]=useState({

        vehiclenum:""

    })
    const readDeleteDetails=(event)=>{

        SetDeleteVehicleDetails({...DeleteVehicleDetails,[event.target.name]:event.target.value})

    }
    const DisplayDeleteDetails=()=>{
        //console.log(DeleteVehicleDetails)
        const appLink = "http://127.0.0.1:8000/api/delete/"
        

        axios.post(appLink,DeleteVehicleDetails).then(
            (response) => {
                console.log(response.data)
                if(response.data.status=="Deleted Successfully")
                {
                    alert("Deleted")
                }
                else{
                    alert("error")
                }
               

            }
        )
   
    }
  return (
    <div>
        <NavigationBar/>

<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Vehicle Number</label>
                                <input type="text" name="vehiclenum" value={DeleteVehicleDetails.vehiclenum} className="form-control" onChange={readDeleteDetails}/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={DisplayDeleteDetails} className="btn btn-primary">Delete</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Delete