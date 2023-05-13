import React, { Component, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import QRCode from 'qrcode.react';

function MyVerticallyCenteredModal(props) {
  // console.log(props)
  const image_title = props.item.name_+'.png'

  const itemUrl  = 'http://localhost:3000/dashboard/scan/'+ props.item.id;

  // useEffect(() => {
  //   window.location.href = itemUrl;
  // }, [itemUrl]);

  const qrCodeRef = useRef();

  const handleDownloadClick = () => {
    const canvas = qrCodeRef.current.querySelector('canvas');
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = image_title;
    link.href = dataUrl;
    link.click();
  };

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
        <div ref={qrCodeRef}>
        <QRCode value={itemUrl}/>
        <button onClick={handleDownloadClick}>Download QR Code</button>
        </div>
        {/* console.log(itemUrl); */}
        {/* <Button onClick={props.onHide}>Close</Button> */}
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