import React from 'react';

class ImageCard extends React.Component{
    render(){
        return(
            <div>
            <img 
            src={this.props.image.urls.description}
            alt={this.image.urls.description}
            </div>
        )
    }
}

export default ImageCard;