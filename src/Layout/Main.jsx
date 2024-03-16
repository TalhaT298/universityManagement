import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderFooter= location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;