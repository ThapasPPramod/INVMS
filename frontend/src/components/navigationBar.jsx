import React, { useState } from 'react';
import { useEffect } from 'react';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';
import ControlledTabsInv from './inv';
import QrScanner from './scan_qr';
import Users from './users';

function NavigationBar(props){
    var type = props.user_class
    const [activeKey, setActiveKey] = useState('home');

    const handleSelect = (key) => {
        setActiveKey(key);
    };

        return (
            <div>
            <Navbar variant='dark' bg='dark' expand='lg'>
                <Container fluid>
                    <Navbar.Brand href='/'>
                        <img src='/logo_white.png' className="d-inline block align-top" alt="my image" style={{width:30, height:30}}/>{' '}INV-MS
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar'/>
                    <Navbar.Collapse id='havbar'>
                        <Nav className='me-auto' activeKey={activeKey} onSelect={handleSelect}>
                            <Nav.Link eventKey={"scan"} >Scan QR</Nav.Link>
                            {type==='admin' ?<Nav.Link eventKey={"inventory"}>Inventory</Nav.Link>:null}
                            {type==='admin' ?<Nav.Link eventKey={"users"} >Update users</Nav.Link>:null}
                            <Nav.Link eventKey={"about"} >About</Nav.Link>
                            <Nav.Link href='/' >Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                <div style = {{marginTop: '20px'}}>
                <Container>
                    {activeKey==='scan' && <QrScanner/>}
                    {activeKey==='inventory' && <ControlledTabsInv/>}
                    {activeKey==='users' && <Users/>}
                </Container>
                </div>
            </div>
        );
}
 
export default NavigationBar;