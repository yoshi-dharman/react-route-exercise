import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

import profile from '../assets/profile.png';

function Profile() {
    let history = useHistory();

    let dataUser = {
        name : "",
        biodata : "",
    };

    if(localStorage.user){
        dataUser = JSON.parse(localStorage.user);
    }

    useEffect(()=>{
        if(!localStorage.user){
            alert("Anda belum login!");
            history.push("/login");
        }
    });

    return (

        <>
        {!localStorage.user
            ? 
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border mt-5" role="status">
                </div>
            </div>
            :
            <div className="row row-cols-lg-2 row-cols-1 d-flex mt-5">
                <div className="text-center">
                    <img src={profile} className="img-fluid w-50" alt="profile"></img>
                </div>
                <div className="">
                    <h2 className="text-center">About Me</h2>
                    <hr></hr>
                    <table className="table table-borderless text-start mt-2">
                        <tbody>
                        <tr>
                            <td className="fw-bold">Nama</td>
                            <td>:</td>
                            <td>{dataUser.name}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold">Biodata</td>
                            <td>:</td>
                            <td><p>{dataUser.biodata}</p></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        }
        
        </>
    )
}

export default Profile
