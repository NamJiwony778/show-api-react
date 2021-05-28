import React,{ useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalForm(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="secondary" onClick={handleShow}>
          Details
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Details of the object with id: {props.id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><b>Description: </b>{props.description}</p>
            <p><b>Link: </b><a href={props.url}>{props.url}</a></p>
            <p><b>Types: </b>{props.types.join(", ")}</p>
            <p><b>Topics: </b>{props.topics.join(", ")}</p>
            <p><b>Levels: </b>{props.levels.join(", ")}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleClose}>
              Got it!
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalForm;