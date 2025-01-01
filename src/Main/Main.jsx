import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const Main = () => {
    return (
        <div className='darkMode'>
            <NavBar></NavBar>
            <Outlet></Outlet>
           <Footer></Footer>
            
        </div>
    );
};

export default Main;