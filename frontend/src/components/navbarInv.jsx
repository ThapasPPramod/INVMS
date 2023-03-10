import React, { useState } from 'react';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';

function NavigationBarInv(){


        return (
            <Navbar variant='dark' bg='dark' expand='lg'>
                <Container fluid>
                    <Navbar.Brand href='/'>
                        <img src='/logo_white.png' className="d-inline block align-top" alt="my image" style={{width:30, height:30}}/>{' '}INV-MS
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar'/>
                    <Navbar.Collapse id='havbar'>
                        <Nav className='me-auto'>
                            <Nav.Link href='./scan' >Scan QR</Nav.Link>
                            {/* <NavDropdown menuVariant='dark' title='Inventory'>
                                <NavDropdown.Item href='#'>View</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='/'>Modify</NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link href='./inventory' active>Inventory</Nav.Link>
                            <Nav.Link href='./users' >Update users</Nav.Link>
                            <Nav.Link href='./about' >About</Nav.Link>
                            <Nav.Link href='/' >Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>


            </Navbar>
        );
}
 
export default NavigationBarInv;