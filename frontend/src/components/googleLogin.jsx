import React, { Component, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import {login} from '../reducers/authReducer';
import { redirect, useNavigate } from 'react-router-dom';


function GoogleLogin(){
    const dispatch = useDispatch();

    const handleCallbackResponse = (response) => {
        console.log("encoded JWT id TOKEN: "+response.credential);
        var userObject = jwtDecode(response.credential);
        console.log("HELLO\n");
        console.log(userObject);
        dispatch(login(userObject));
        // setUser(userObject)
        try{
        redirect('http://localhost:3000/dashboard/user');
        }catch{
            
        }
        document.getElementById("signInDiv").hidden = true;
        document.getElementById("signOutDiv").hidden = false;
        // console.log(user);
        // console.log(user && true);
    }
    function handleSignOut(event){
        // setUser({});
        document.getElementById("signInDiv").hidden = false;
        document.getElementById("signOutDiv").hidden = true;
    }
    useEffect(()=>{
        google.accounts.id.initialize({client_id:"912567644891-qjnn7dj668vgg51btg96lingh7rterb3.apps.googleusercontent.com", callback:handleCallbackResponse});
        
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large"}
        )
        google.accounts.id.prompt();
    },[]);
    return (
        <>
        <div id = "signInDiv">
        </div>
        <div id="signOutDiv">
            <h1>hello </h1>
            <button onClick={ (e)=>handleSignOut(e)}>Sign out</button>
        </div>
        </>
    );

}

export default GoogleLogin;