import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import QRCode from 'react-qr-code';

function MyVerticallyCenteredModal(props) {
  console.log(props)


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Item Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.item.name_}</h4>
        <p>
          {Object.entries(props.item).map(([key, value]) => (<p>{key}  : {value}</p>))}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <QRCode value={<ItemDetail item={props.item}/>}/>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Item({item}) {
  const [modalShow, setModalShow] = React.useState(false);
  console.log(item)
  return (
    <>
      <Button variant="outline-primary" onClick={() => setModalShow(true)}>
        {item.name_}
      </Button>

      <MyVerticallyCenteredModal
        item={item}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Item;