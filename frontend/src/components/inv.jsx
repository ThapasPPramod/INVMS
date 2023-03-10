import React, { useState } from 'react';
import {Container, Tab, Tabs, Table, Button, Form} from 'react-bootstrap'
// import InventoryView from './inventory';


import Item from './item';

function AddItem() {

  const [name, setName] = useState('');
  const [date_of_purchase, setDop] = useState('');
  const [bill_number, setBn] = useState('');
  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');
  const [amount, setAmount] = useState('');
  const [color, setColor] = useState('');
  const [warranty_period, setWp] = useState('');
  const [supplier_address, setSa] = useState('');
  const [remarks, setRemarks] = useState('');

  function handleSubmit(event){
    event.preventDefault(); 


      alert(name + ' was added!');
  }
  
    return (
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter item name" onChange={(e) => (setName(e.target.value))} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Purchase Date</Form.Label>
          <Form.Control type="date" placeholder="dd-mm-yyyy" onChange={(e) => (setDop(e.target.value))}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="bn">
          <Form.Label>Bill Number</Form.Label>
          <Form.Control type="text" placeholder="Enter bill number" onChange={(e) => (setBn(e.target.value))}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="sa">
          <Form.Label>Supplier Address</Form.Label>
          <Form.Control type="text" placeholder="Enter supplier address" onChange={(e) => (setSa(e.target.value))}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="q">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="text" placeholder="Enter quantity purchased" onChange={(e) => (setQuantity(e.target.value))}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="rate">
          <Form.Label>Rate</Form.Label>
          <Form.Control type="text" placeholder="Enter rate(in Rs. /unit)" onChange={(e) => (setRate(e.target.value))}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="text" placeholder="Enter bill amount(in Rs.)" onChange={(e) => (setAmount(e.target.value))}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="color">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" placeholder="Enter color" onChange={(e) => (setColor(e.target.value))}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="wp">
          <Form.Label>Warranty Period</Form.Label>
          <Form.Control type="text" placeholder="Enter warranty period (if any)" onChange={(e) => (setWp(e.target.value))}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="remarks">
              <Form.Label>Remarks</Form.Label>
              <Form.Control type="text" placeholder="Enter remarks (if any)" onChange={(e) => (setRemarks(e.target.value))}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit and generate QR code
        </Button>
      </Form>
    );
  }

export default function ControlledTabsInv() {
  var [key, setKey] = useState('view');
  var [items, setItems] = useState([{sl:1, name:'Ceiling fan', purchase_date:'02-10-2016', rate:'2000',remarks:'Good'}, 
  {sl:2, name:'Tubelight', purchase_date:'04-10-2016', rate:'600',remarks:''},
  {sl:3, name:'Laptop', purchase_date:'02-11-2016', rate:'20000',warranty_period:'1 year'},
  {sl:4, name:'xyz', purchase_date:'02-11-2026', rate:'25000',remarks:''},]);
  return (
    <Container>
        <p><h3><center>INVENTORY</center></h3></p>
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        >
        <Tab eventKey="view" title="View">
          
        <Container fluid >
      <Table striped expand='lg' variant='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Qrcode</th>
          </tr>
        </thead>

        <tbody>
        {items.map( (item) => (
          <>
          <tr>
            <td>{item.sl}</td><td>{<Item item={item} />}</td><td><Button variant='outline-info'>Generate Qr Code</Button></td>
          </tr>
          </>
        ))}

        </tbody>
      </Table>
    </Container>
        </Tab>
        <Tab eventKey="add" title="Add">
            <AddItem />
        </Tab>

        </Tabs>
    </Container>
  )
}