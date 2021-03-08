import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import LoginControl from '../components/LoginControl';


let loginHandle = (event, history, setButton, login) => {
    event.preventDefault();
    let email = login.emailLogin;
    let pass = login.passwordLogin;

    let url = "https://6023acfe6bf3e6001766b5db.mockapi.io/reactGallery";

        fetch(url)
        .then(respon => respon.json())
        .then(data => {

            let dataUser = data.find((item)=>{
                return email === item.email && pass === item.password
            });

            // console.log(dataUser);
            if(dataUser){
                let { password, ...userData } = dataUser;
                localStorage.user = JSON.stringify(userData);
                setButton(<LoginControl />)
                history.push("/");
            }
            else{
                alert("User tidak ditemukan! atau email dan password salah!");
                event.target.passwordLogin.value = "";
                event.target.passwordLogin.focus();
            }
        })
}

function Login(props) {
    let history = useHistory();
    const [login, setLogin] = useState({
        emailLogin : "",
        passwordLogin : ""
    })

    let changeLogin = (e) => {
        setLogin((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    }

    return (
        <div className="row mt-5">
        <div className="col-12 text-center ">
            <h1>Login User</h1>
        </div>
        <div className="d-flex justify-content-center mt-4">
            <form onSubmit={(event) => loginHandle(event, history, props.setButton, login)} className="col-6">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input required onChange={changeLogin} name="emailLogin" type="email" className="form-control" id="inputEmailLogin" aria-describedby="emailHelp"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input required onChange={changeLogin} name="passwordLogin" type="password" className="form-control" id="inputPasswordLogin"></input>
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
        </div>
        </div>
    )
}

export default Login
