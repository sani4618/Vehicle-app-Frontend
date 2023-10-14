import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
   
    const [NewLogin,SetNewLogin]=useState({
        email:"",
        password:""
    })
    const readNewLogin=(event)=>{
        SetNewLogin({...NewLogin,[event.target.name]:event.target.value})
    }
    const DisplayNewLogin=()=>{
       // console.log(NewLogin)
       const Applink="http://127.0.0.1:8000/api/login/"
       axios.post(Applink,NewLogin).then(
        (response) => {
            console.log(response.data)
            if (response.data.status=="failed") {
                alert("Invalid Credentials")
                
            } else {
            navigate("/viewall")
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
                        <label htmlFor="" className="form-label">Enter Email/Phonenumber</label>
                        <input type="email" name="email" value={NewLogin.email} id="" className="form-control" onChange={readNewLogin} />
                    </div>
                   
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" name="email" value={NewLogin.password} id="" className="form-control" onChange={readNewLogin} />
                    </div>
                   
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={DisplayNewLogin} className="btn btn-primary">Sign In/Login In</button>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <a href="/reg">New Registeration/Sign Up</a>
                    </div>

                </div>

                </div>
            </div>
        </div>


    </div>
  )
}

export default Home