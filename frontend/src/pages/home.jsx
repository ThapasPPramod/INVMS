import React, {Component} from 'react';
import LoginPrompt from '../components/login'

function Home() {
    return (
        <div className='mt-5'>
            <>
            <LoginPrompt />
            <a href='./dashboard/user'>user</a> 
            <a href='./dashboard/admin'>admin</a>
            </>

        </div>
    );
}

export default Home;