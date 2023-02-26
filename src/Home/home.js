import React from 'react'
import Container from 'react-bootstrap/Container'
import ExtraLinks from './ExtraLinks'
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <Container>
            <img src="art/ImageHeader.PNG" className='mocha' />
            <h1>Hi there!</h1>
            <p>
                Welcome to my little internet corner!
                I am a digital artist who loves to draw all sorts of creatures like
                dragons, gryphons, noodles, etc. I've been drawing seriously since 2017
                and I'm always learning new techniques and skills.
            </p>
            <p>
                Here you can find all sorts of general information about me and my art.
                If you are interested in a commission you can click <Link to="commissions">here</Link> for information on ordering one.
                If you want to see some art examples you can check the gallery <Link to="gallery">here</Link> as well.
            </p>
            <p>If you have any questions, don't hesitate to reach out.</p>
            <p>
                <h2>Links</h2>
                <ExtraLinks />
            </p>
        </Container>
    )
}
export default HomePage;