// import React from 'react'
import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

import GalleryItem from "../components/GalleryItem";


function Gallery() {
    let history = useHistory();

    let dataUser = {
        name : "",
        biodata : "",
    };

    let galleryData = [
        "img-1.jpg",
        "img-2.jpg",
        "img-3.jpg",
        "img-4.jpg",
        "img-5.jpg",
        "img-6.jpg",
        "img-7.jpg",
        "img-8.jpg",
        "img-9.jpg",
    ];

    if(localStorage.user){
        dataUser = JSON.parse(localStorage.user);
    }

    useEffect(()=>{
        if(!dataUser){
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
            <div className="row mt-5">
                <div className="col-12">
                    <h2>Gallery</h2>
                    <hr></hr>
                </div>

                <div className="d-flex justify-content-center mt-3">

                    <div className="image-columns">
                        {galleryData.map((item,index) => {
                            return <GalleryItem key={index} index={index} data={item}/>
                        })}
                    </div>  
                </div>
            </div>
        }
        
        </>
    )
}

export default Gallery
