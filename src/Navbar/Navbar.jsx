import React, { useState } from 'react';
import './Navbar.scss';
import { MdTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TiThMenu } from 'react-icons/ti';

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    const showNav = () => {
        setActive('navBar activeNavbar')
    };
    const closeNav = () => {
        setActive('navBar')
    }
    return (
        <section className='navBarSection'>
            <header className="header flex">


                <div className='logoDiv'>
                    <a className='logo'>
                        <h1><MdTravelExplore className='icon' />Reshab</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className='navLists flex'>
                        <li className='navItem'>
                            <a href='' className='navLink'>Home</a >
                        </li>
                        <li className='navItem'>
                            <a href='' className='navLink'>Packeges</a >
                        </li>
                        <li className='navItem'>
                            <a href='' className='navLink'>About</a >
                        </li>
                        <li className='navItem'>
                            <a href='' className='navLink'>Contact</a >
                        </li>
                        <li className='navItem'>
                            <a href='' className='navLink'>Shop</a >
                        </li>
                        <li className='navItem'>
                            <a href='' className='navLink'>News</a >
                        </li>
                        <li className='navItem'>
                            <a href='' className='navLink'>Pages</a >
                        </li>
                        <button className='btn'>
                            <a href='' >BOOK NOW</a>
                        </button>
                    </ul>
                    <div onClick={closeNav} className='closeNavbar'>
                        <AiFillCloseCircle className='icon' />

                    </div>

                </div>


                <div onClick={showNav} className='toddleNavbar'>
                    <TiThMenu className="icon" />
                </div>
            </header>
        </section>
    )
}

export default Navbar;
