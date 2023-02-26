import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import * as consts from '../const.js'
/**
 * 
 * @returns Creates an object consisting of one row with N columns of clicklable icons
 */
function ExtraLinks() {
    return (
        <Container>
            <Row >
                <Col sm="1">
                    <a href={consts.FURAFFINITY_URL} target="_blank"><img class="icon" src='icons/FA.png'/></a>
                </Col>
                <Col sm="1">
                    <a href={consts.TWITTER_URL}><img class="icon" src='icons/TWT.png'/></a>
                </Col>
                <Col sm="1">
                    <a href={consts.TRELLO_URL}><img class="icon" src='icons/TRLL.png'/></a>
                </Col>
            </Row>
        </Container>
    )
}

export default ExtraLinks;