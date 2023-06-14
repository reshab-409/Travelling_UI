import React from 'react';
import './main.css'
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Body from './Body/Body';
import Footer from './Footer/Footer';

const Main = () => {
    return (

        <>
            <Navbar />
            <Home/>
            <Body/>
            <Footer/>
        </>

    )
}

export default Main;
