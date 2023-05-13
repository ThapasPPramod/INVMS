import {Button, Container, Image, Stack} from 'react-bootstrap';
import React, { useState, useEffect, Component } from 'react';

import axios from 'axios';
import Glogin from './glogin';


function LoginPrompt(){
    // const [ user, setUser ] = useState([]);
    // const [ profile, setProfile ] = useState([]);

    // const login = useGoogleLogin({
    //     onSuccess: (codeResponse) => setUser(codeResponse),
    //     onError: (error) => console.log('Login Failed:', error)
    // });

    // useEffect(
    //     () => {
    //         if (user) {
    //             axios
    //                 .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
    //                     headers: {
    //                         Authorization: `Bearer ${user.access_token}`,
    //                         Accept: 'application/json'
    //                     }
    //                 })
    //                 .then((res) => {
    //                     setProfile(res.data);
    //                 })
    //                 .catch((err) => console.log(err));
    //         }
    //     },
    //     [ user ]
    // );




        return (
            <Container>
                <Stack gap={4}>
                    <center>
                        <p><Image className='md-3' style={{width:150, height:150}} src='logo_white.png' rounded={true} ></Image></p>
                        <p>INV-MS</p>
                        {/* <p>{user}</p> */}
                    </center>
                        <Glogin />
                </Stack>
            </Container>
        );
}
 
export default LoginPrompt;