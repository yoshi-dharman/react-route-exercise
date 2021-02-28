import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {

    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-between w-100">
                        {/* <a class="nav-link active" aria-current="page" href="#">tes</a> */}
                        <div className="flex-lg-row flex-column d-flex">
                            <li className="nav-item">      
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/gallery" className="nav-link">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link">Profile</Link>
                            </li>
                        </div>
                        <div className="flex-lg-row flex-column d-flex">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>

        // <nav>
        //     <Link className="text-danger" to="/">Home</Link>
        //     <Link to="/gallery">Gallery</Link>
        //     <Link to="/profile">Profile</Link>
        //     <Link to="/login">Login</Link>
        //     <Link to="/register">Register</Link>
        // </nav>
    )
}

export default Navbar
