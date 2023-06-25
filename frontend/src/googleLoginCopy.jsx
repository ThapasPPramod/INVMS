import React, { Component, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

function GoogleLogin(){
    const [user, setUser] = useState({})
    const handleCallbackResponse = (response) => {
        console.log("encoded JWT id TOKEN: "+response.credential);
        var userObject = jwtDecode(response.credential);
        console.log("HELLO\n");
        console.log(userObject);
        setUser(userObject)
        document.getElementById("signInDiv").hidden = true;
        document.getElementById("signOutDiv").hidden = false
        console.log(user);
        console.log(user && true);
    }
    function handleSignOut(event){
        setUser({});
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
    },[user]);
    return (
        <>
        <div id = "signInDiv">
            hello
        </div>
        <div id="signOutDiv">
            <h1>hello {user.name}</h1>
            <button onClick={ (e)=>handleSignOut(e)}>Sign out</button>
            { user && 
            <div>
                <img src={user.picture}></img>
                <h4>{user.name}</h4>
            </div>
            }
        </div>
        </>
    );

}

export default GoogleLogin;