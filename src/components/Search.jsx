import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const Search = () => {
    const [data, setdata] = useState([])
    const [isLoading, SetIsLoading] = useState(false)
    const [SearchVehicleDetails, SetVehicleDetails] = useState({
        brand: ""
    })
    const readSearchDetails = (event) => {
        SetVehicleDetails({ ...SearchVehicleDetails, [event.target.name]: event.target.value })
    }
    const DisplaySearchVehicle = () => {
        //console.log(SearchVehicleDetails)
        SetIsLoading(true)
        const appLink = "http://34.226.75.12:8000/api/search/"
        axios.post(appLink, SearchVehicleDetails).then(
            (response) => {
                console.log(response.data)
                setdata(response.data)
                SetIsLoading(false)
                
            }
        )
    }
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Vehicle Name</label>
                                <input type="text" name="brand" value={SearchVehicleDetails.brand} className="form-control" onChange={readSearchDetails} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={DisplaySearchVehicle} className="btn btn-primary">Search</button>
                            </div>

                            {isLoading ? <p><div class="spinner-border text-success" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div></p> :
                                data.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
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
                                )}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Search
