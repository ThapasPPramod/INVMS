import React, { Component } from 'react';
import { Stack } from 'react-bootstrap';
import ControlledTabsInv from '../components/inv';
import NavigationBarInv from '../components/navbarInv.jsx'

function AdminInventory(){
    return(
        <div>
            <Stack gap={2}>
                <NavigationBarInv /> 
                <ControlledTabsInv/> 
            </Stack>
        </div>
    );
}

export default AdminInventory;