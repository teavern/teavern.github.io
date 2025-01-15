import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Commissions() {
    return (
        <Container>
            <h1>Commission Info</h1>
            <div class="notice">
                <b>NOTICE</b>: Commissions are opened via furaffinity/Bluesky/Telegram where the latest journal/post will be a link to a form that can be filled out.
            </div>
            <h2><u>Last Updated: January 15th, 2025</u></h2>
            <a href="art/Prices.png" target="_blank"><img className="pricesheet" src='art/Prices.png'></img></a>
            <h1>Prices</h1>
            <div class="tos">
                <Row>
                    <Col>
                        <ul>
                            <u>Basic Sketch</u>:
                            <li>A basic, uncolored drawing with minimal clean up</li>
                            <li>$50 per character</li>
                            <li>No option for backgrounds</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <u>Colored Sketch</u>:
                            <li>A cleaned up sketch with color</li>
                            <li>$100 base price</li>
                            <li>Additional characters are $70 each</li>
                            <li>Add a colored background for $50</li>
                            <li>Comes with very simple shading</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul>
                            <u>Portrait</u>:
                            <li>A detailed rendering of a single character from the chest/neck up</li>
                            <li>$100 base price</li>
                            <li>No background or very simple background included</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <u>Painting</u>:
                            <li>A detailed rendering of a character/concept</li>
                            <li>$250 base price</li>
                            <li>Additional characters are $70</li>
                            <li>Alts, cutaways, panels are priced by complexity but are generally $40 for more complex stuff</li>
                            <li>Comes with a painted background</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul>
                            <u>Stickers</u>:
                            <li>$20 per single sticker, or $80 per five</li>
                            <li>Each image is 2048x2048</li>
                            <li>Style is simplified</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <h1>Terms of Service</h1>
            <div class="tos">
                <p>By commissioning me (the artist), you (the client) agree to the following:</p>
                <Row>
                    <Col>
                    1. <u>Payment</u>: Payment is expected in full after an initial sketch is agreed upon. 
                    For larger projects, payment in half of the full price upon agreeing to a sketch is an option with the remaining amount due upon completion or near completion.
                    If the cost should be split between two or more people, separate invoicing is highly preferred. Payment is done solely through PayPal invoicing.
                    </Col>
                    <Col>
                    2. <u>Refunds</u>:  Refunds are available in full only before the final uncolored line art is given for coloring approval (Colored sketch tier and above).
                    If lineart has been sent by the artist or received by the client then the commission is considered a basic sketch and only the difference between a basic sketch tier and the client's requested tier can be refunded.
                    </Col>
                </Row>
                <p class='separator'></p>
                <Row>
                    <Col>
                    3. <u>Changes</u>: Changes can be made within reason. If any error in the art is the artist's fault then the change is free of charge. 
                    Any change that modifies the entire composition (major pose modification, change entire background, etc) must be done within the initial sketch phase, otherwise it will not be honored.
                    </Col>
                    <Col>
                    4. <u>Licensing</u>: Artwork is provided as is for personal use only. The client may not use the commissioned artwork for any commercial purposes or to generate a profit without prior rearrangements with the artist.
                    This includes, but not limited to, using the artwork in the creation of NFTs, advertising, selling physical prints, and putting the digial files behind any paywalls. 
                    The client may redistribute the commission freely as long as the artist's watermark is visible in the image. The client may also print the commission so long as it is used non-commercially (Personal home decor, given to friends, etc).
                    The artist retains the right to use the artwork for promoting their own services only.
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Commissions;