import './ImageList.css';
import ImageCard from './ImageCard';
import React from 'react';

const ImageList = (props) => {
    const imageList = props.images.map((image) => 
        <ImageCard key={image.id} image={image}/>);
        
    console.log(imageList);
    return(
        <div className="image-list">{imageList}</div>
    )
}

export default ImageList;