// import React from 'react'
import React from 'react';

import GalleryItem from "../components/GalleryItem";


function Gallery() {

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

    return (

        <>
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
        
        </>
    )
}

export default Gallery
