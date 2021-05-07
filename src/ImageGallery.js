import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React from 'react'

import ImageCard from "./ImageCard.js"
class ImageGallery extends React.Component {
    constructor() {
        super();
        this.state = {
            currentIdx : 0
        }
        this.onChange = this.onChange.bind(this);
    }
    /**
     * Executed when a user changes the image in the carousel
     * @param {*} val 
     */
    onChange(val) {
        this.setState({
            value: val
        });
        console.log(this.state.value);
    }

    render() {
        return (
        <Carousel plugins={['arrows']} onChange={this.onChange}>
            <ImageCard URL="art/1.jpg"/>
            <ImageCard URL="art/2.jpg"/>
            <ImageCard URL="art/3.jpg"/>
            <ImageCard URL="art/4.jpg"/>
            <ImageCard URL="art/5.jpg"/>
            <ImageCard URL="art/6.jpg"/>
            <ImageCard URL="art/7.jpg"/>
            <ImageCard URL="art/8.jpg"/>
            <ImageCard URL="art/9.jpg"/>
        </Carousel>
        );
    }

}

export default ImageGallery;