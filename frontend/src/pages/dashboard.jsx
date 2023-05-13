import React, { Component, } from 'react';
import { Stack } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Users from '../components/users';
import { useState } from 'react';
import NavigationBar from '../components/navigationBar';

function Dashboard(props){
    var user_class = props.user_class


    return (
<div>
            <Stack gap={2}>
                <NavigationBar user_class={user_class}/> 
                <h3>{user_class}</h3>
            </Stack>
        </div>
    );
}
export default Dashboard;