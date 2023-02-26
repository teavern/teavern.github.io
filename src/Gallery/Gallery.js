import React from 'react'
import ArtCard from './ArtCard.js'
import Container from 'react-bootstrap/Container'
import { ResponsiveMasonry } from 'react-responsive-masonry'
import Masonry from 'react-responsive-masonry'

class Gallery extends React.Component {
    num_images = 17;

    renderCardMap() {

    }
    render() {
        var galleryItems = [];
        for (var i = this.num_images; i >= 1; i--) {
            var str = 'art/'+i+'.jpg';
            galleryItems.push(<ArtCard url={str}></ArtCard>);
        }
        return (
            <Container>
                <h1>Take a look at some of my art!</h1>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry>
                        {galleryItems}
                    </Masonry>
                </ResponsiveMasonry>
            </Container>
        )
    }
}

export default Gallery;