import React from 'react';

function GalleryItem(props) {
    return (
        <div className="figure w-100">
                <img src={require('../assets/'+ props.data).default} className="card-img-top img-fluid img-object-fit" alt="fav"></img>
                <h5 className="figcaption text-center">Image {props.index +1}</h5>
        </div>
    );
}

export default GalleryItem;
