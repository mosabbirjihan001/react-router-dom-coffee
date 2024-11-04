import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className='h-16'>
                {/* Nav bar */}
            <Navbar></Navbar>
            </div>

            <div className='min-h-[calc(100vh-232px)] py-12 container mx-auto px-12'>{/* Dynamic content */}
                <Outlet></Outlet>
            </div>

            {/* footer  */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;