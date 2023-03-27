import React, { Component } from 'react';
import {Button, Container, Image, Stack} from 'react-bootstrap';


class LoginPrompt extends Component {

    constructor(props){
        super(props)
        this.state = {loginLink: '/login/'};
        console.log(this.state.loginLink)
    }


    render() { 
        return (
            <Container>
                <Stack gap={4}>
                    <center>
                        <p><Image className='md-3' style={{width:150, height:150}} src='logo_white.png' rounded={true} ></Image></p>
                        <p>INV-MS</p>
                    </center>
                    <Button href='../user/dashboard' variant='outline-light' usertype='user'>Login as user</Button>
                    <Button href='../admin/dashboard/scan' variant='outline-light' usertype='admin'>Login as admin</Button>
                </Stack>
            </Container>
        );
    }
}
 
export default LoginPrompt;