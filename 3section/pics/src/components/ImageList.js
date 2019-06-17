import React from 'react';
import './ImageList.css'


const ImageList = (props) => {

    console.log(props.images)

    const images = props.images.map((image) => {
        return <img alt={image.urls.description} src={image.urls.regular} key={image.id}/>
        
    });
    return    <div className="image-list"> {images}</div>;

}

export default ImageList;