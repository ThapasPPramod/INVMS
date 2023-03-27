import React, { Component } from 'react';
import NavigationBarUser from '../components/navbarUser';
import QrScanner from '../components/scan_qr';


import {Stack} from 'react-bootstrap';
import ControlledTabsInv from '../components/inv';

function DashboardUser() {


    return (
        <div>
            <Stack gap={2}>
                <NavigationBarUser /> 
                {/* <QrScanner />  */}
            </Stack>
        </div>
    );
}

export default DashboardUser;