import React, { Component } from 'react';
import { Stack } from 'react-bootstrap';
import Users from '../components/users';
import NavigationBarUsers from '../components/navbarUsers';

function AdminUsers(){
    return(
        <div>
            <Stack gap={2}>
                <NavigationBarUsers /> 
                <Users /> 
            </Stack>
        </div>
    );
}

export default AdminUsers;