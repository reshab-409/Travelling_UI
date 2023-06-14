import React, { useEffect } from 'react';
import video from './footer.mp4';
import { BsSend } from 'react-icons/bs';
import './Footer.scss';
import { MdTravelExplore } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <section className='footer'>
            <div className='videoDiv'>
                <video src={video} autoPlay muted loop type="video/mp4" />
            </div>
            <div className='secContent container'>
                <div className='contactDiv flex'>
                    <div data-aos="fade-up" className='text'>
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className='inputDiv flex'>
                        <input data-aos="fade-up" type='text' placeholder='Enter Email Address' />
                        <button data-aos="fade-up" className='btn flex' type='submit'>SEND <BsSend className='icon' /></button>
                    </div>

                </div>

                <div className='footerCard flex'>
                    <div className='footerIntro flex'>
                        <div className='logoDiv'>
                            <a href='#' className='logo flex'>
                                <MdTravelExplore className='icon' />
                                Reshab
                            </a>
                        </div>

                        <div data-aos="fade-up" className='footerParagraph'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae dolore natus veritatis sed incidunt voluptas quod soluta labore pariatur! Facilis officia quos magni dolores dolorem natus sequi eos minima enim.
                        </div>
                        <div data-aos="fade-up" className='footerSocials flex'>
                            <FaFacebook className='icon' />
                            <FaInstagram className='icon' />
                            < FaTelegram className='icon' />
                        </div>


                    </div>

                    <div className='footerLinks grid'>

                        {/* Group one */}
                        <div data-aos="fade-up"  data-aos-duration="3000" className='linkGroup'>
                            <span className='groupTitle'>
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <MdOutlineKeyboardArrowRight className='icon' />
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <MdOutlineKeyboardArrowRight className='icon' />
                                Services
                            </li>
                            <li className="footerList flex">
                                <MdOutlineKeyboardArrowRight className='icon' />
                                Agency
                            </li>
                            <li className="footerList flex">
                                <MdOutlineKeyboardArrowRight className='icon' />
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <MdOutlineKeyboardArrowRight className='icon' />
                                Payment
                            </li>
                        </div>

                        {/* Group two */}
                        <div data-aos="fade-up"  data-aos-duration="4000" className='linkGroup'>
                            <span className='groupTitle'>
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <MdOutlineKeyboardArrowRight className='icon' />
                                Booking
                            </li>
                            <li className="footerList flex">
                                <MdOutlineKeyboardArrowRight className='icon' />
                                Rentcars
                            </li>
                            <li className="footerList flex">
                                <MdOutlineKeyboardArrowRight className='icon' />
                                Hostelworld
                            </li>
                            <li className="footerList flex">
                                <MdOutlineKeyboardArrowRight className='icon' />
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <MdOutlineKeyboardArrowRight className='icon' />
                                TripAdvisor
                            </li>
                        </div>


                        {/* Group three */}
                        <div data-aos="fade-up" data-aos-duration="5000" className='linkGroup'>
                            <span className='groupTitle'>
                                LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <MdOutlineKeyboardArrowRight className='icon' />
                                London
                            </li>
                            <li className="footerList flex">
                                <MdOutlineKeyboardArrowRight className='icon' />
                                California
                            </li>
                            <li className="footerList flex">
                                <MdOutlineKeyboardArrowRight className='icon' />
                                Los Angelis
                            </li>
                            <li className="footerList flex">
                                <MdOutlineKeyboardArrowRight className='icon' />
                                Miami
                            </li>
                            <li className="footerList flex">
                                <MdOutlineKeyboardArrowRight className='icon' />
                                Swithzerland
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST OF RESHAB'S THEME</small>
                        <small>COPYRIGHTS RESERVED - Reshab 2023</small>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer;
