import React, { Component, useState } from 'react';
import {Container, Tab, Tabs, Table, Button, Form} from 'react-bootstrap'

function AddUser() {

const [name, setName] = useState('');
const [user_id, setUid] = useState('');
const [email, setEmail] = useState('');
const [admin, setAdmin] = useState(false);

function submitHandler(event){
  event.preventDefault();
  alert(name + ' was successfully added!')
}

  return (
    <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter user name" onChange={(e) => (setName(e.target.value))}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="uid">
        <Form.Label>User Id</Form.Label>
        <Form.Control type="text" placeholder="Enter user id" onChange={(e) => (setUid(e.target.value))}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter user email" onChange={(e) => (setEmail(e.target.value))}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Admin" />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Register
      </Button>
    </Form>
  );
}

export default function Users() {
  var [key, setKey] = useState('view');
  var [items, setItems] = useState([{sl:1, name:'Kumar Vikramadeet', user_id:'imv001', email:'kumarvikram@gmail.com',admin:'YES'}, 
  {sl:2, name:'Jyothirmay Sarkar', user_id:'imv002', email:'jyothirmay@gmail.com',admin:'YES'},
  {sl:3, name:'Kumar Vikramadeet', user_id:'imv003', email:'thapas@gmail.com',admin:'NO'},]);
  return (
    <Container>
        <p><h3><center>USERS</center></h3></p>
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
            <th>User Name</th>
            <th>User Id</th>
            <th>Email</th>
            <th>Admin</th>
          </tr>
        </thead>

        <tbody>
        {items.map( (item) => (
          <>
          <tr>
            <td>{item.sl}</td><td>{item.name}</td><td>{item.user_id}</td><td>{item.email}</td><td>{item.admin}</td>
          </tr>
          </>
        ))}

        </tbody>
      </Table>
    </Container>
        </Tab>
        <Tab eventKey="add" title="Add">
            <AddUser />
        </Tab>

        </Tabs>
    </Container>
  )
}
