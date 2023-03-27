import React, { useState} from 'react';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';

function NavigationBar(){
    const [activeLink, setActiveLink] = useState('scan');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
        return (
            <Navbar variant='dark' bg='dark' expand='lg'>
                <Container fluid>
                    <Navbar.Brand href='/'>
                        <img src='/logo_white.png' className="d-inline block align-top" style={{width:30, height:30}}/>{' '}INV-MS
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar'/>
                    <Navbar.Collapse id='havbar'>
                        <Nav className='me-auto'>
                            <Nav.Link onClick={() => handleLinkClick('scan')}
            active={activeLink === 'scan'}>Scan QR</Nav.Link>
                            <Nav.Link onClick={() => handleLinkClick('about')}
            active={activeLink === 'about'} >About</Nav.Link>
                            <Nav.Link href='/' >Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>


            </Navbar>
        );
}
 
export default NavigationBar;