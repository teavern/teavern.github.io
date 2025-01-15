import {React, useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

/**
 * url -- relative path of the URL to pull from
 */
function ArtCard(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <a href="/#/gallery/#"><img class='artcard' src={props.url} onClick={handleShow} /></a>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body>
                    <Image class='artmodal' src={props.url} onClick={handleClose} fluid/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ArtCard;