import React, { Component, useState } from 'react';


import {Stack} from 'react-bootstrap';
import ControlledTabsInv from '../components/inv';
import NavigationBarScan from '../components/navbarScan';

function DashboardAdmin() {


    
    return (
        <div>
            <Stack gap={2}>
                <NavigationBarScan /> 

            </Stack>
        </div>
    );
}

export default DashboardAdmin;