import React, { useState } from 'react'
import { useHistory } from "react-router-dom";


let registerHandle = (event, history, register) => {
    event.preventDefault();
    let name = register.nameRegister;
    let email = register.emailRegister;
    let pass = register.passwordRegister;
    let passCheck = register.passwordCheckRegister;
    let biodata = register.biodataRegister;

    if(pass !== passCheck){
        alert("Password anda dengan Confirm Password tidak sama!");
    }
    else{
        let url = "https://6023acfe6bf3e6001766b5db.mockapi.io/reactGallery";

        fetch(url)
        .then(respon => respon.json())
        .then(data => {

            let dataUser = data.filter((item)=>{
                return email === item.email
            });

            if(dataUser.length > 0){
                alert("Email sudah terpakai");
            }
            else{
                fetch(url,{
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name : name,
                        email : email,
                        password : pass,
                        biodata : biodata,
                    })
                }).then(respon => respon.json())
                .then()
                .catch(error => console.error("ini error "+ error))
        
                history.push("/login");
            }
        })

        

    }
}

function Register() {
    let history = useHistory();
    const [register, setRegister] = useState({
        nameRegister : "",
        emailRegister : "",
        passwordRegister : "",
        passwordCheckRegister : "",
        biodataRegister : ""
    })

    let changeRegister = (e) => {
        setRegister((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    }

    return (
        <div className="row mt-5">
        <div className="col-12 text-center ">
            <h1>Register User</h1>
        </div>
        <div className="d-flex justify-content-center mt-4">
            <form onSubmit={(event) => registerHandle(event,history,register)} className="col-6">
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input required onChange={changeRegister} name="nameRegister" type="text" className="form-control" id="inputNameRegister"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input required onChange={changeRegister} name="emailRegister" type="email" className="form-control" id="inputEmailRegister" aria-describedby="emailHelp"></input>
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input required onChange={changeRegister} name="passwordRegister" type="password" className="form-control" id="inputPasswordRegister"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input required onChange={changeRegister} name="passwordCheckRegister" type="password" className="form-control" id="inputPasswordRegisterCheck"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputBiodata" className="form-label">Biodata</label>
                    <textarea required onChange={changeRegister} name="biodataRegister" rows="3" className="form-control" id="inputBiodataRegister"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
        </div>
    )
}

export default Register
