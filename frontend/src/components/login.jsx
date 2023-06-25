import {Button, Container, Image, Stack} from 'react-bootstrap';
import React, { useState, useEffect, Component } from 'react';

import axios from 'axios';
import Glogin from './glogin';
import GoogleLogin from './googleLogin';


function LoginPrompt(){




        return (
            <Container>
                <Stack gap={4}>
                    <center>
                        <p><Image className='md-3' style={{width:150, height:150}} src='logo_white.png' rounded={true} ></Image></p>
                        <p>INV-MS</p>
                        {/* <p>{user}</p> */}
                    </center>
                        <GoogleLogin />
                </Stack>
            </Container>
        );
}
 
export default LoginPrompt;