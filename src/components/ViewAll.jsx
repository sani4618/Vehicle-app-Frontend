import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const appLink="http://127.0.0.1:8000/api/viewall/"
const ViewAll = () => {
    const[viewVehicleDetails,SetViewVehicleDetails]=useState([])
    const [isLoading, SetIsLoading] = useState(true)
    useEffect(
        ()=>{
            FetchVehicleDetails()
        }
    )
   
    const FetchVehicleDetails=()=>{
        axios.get(appLink).then(
            (response)=>{
                SetViewVehicleDetails(response.data)
                SetIsLoading(false)
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
                        {isLoading ? <button class="btn btn-primary" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                <span role="status">Loading...</span>
                            </button> : viewVehicleDetails.map(
                                (value, index) => {
                                    return  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                                    <div class="card">
                                        <img src={value.image} class="card-img-top" alt="..." width="200" height="300"/>
                                            <div class="card-body">
                                                <h5 class="card-title">Vehicle Number={value.vehiclenum}</h5>
                                                <p class="card-text">Owner Name={value.ownername}</p>
                                                <p class="card-text">Brand={value.brand}</p>
                                                <p class="card-text">Model={value.model}</p>
                                                <p class="card-text">Color={value.color}</p>
                                                <p class="card-text">Manufature Year={value.manfyear}</p>
                                                <p class="card-text">Address={value.address}</p>                                            
                                                <p class="card-text">Phone Number={value.phNum}</p>
                                            </div>
                                    </div>
                                </div>
                                }
                            )
                          }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll