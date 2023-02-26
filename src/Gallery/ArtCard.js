import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
/**
 * url -- relative path of the URL to pull from
 */
function ArtCard(props) {
    return (
            <a href={props.url} target='_blank'><img class='artcard' src={props.url}></img></a>
    )
}

export default ArtCard;