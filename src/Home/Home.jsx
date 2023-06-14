import React, { useEffect } from 'react';
import video from './video.mp4';
import './Home.scss';
import { GrLocation } from 'react-icons/gr';
import { FaFilter, FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import { TbApps } from 'react-icons/tb';
import { RiMenuAddFill } from 'react-icons/ri';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

useEffect(()=>{
Aos.init({duration:2000})
},[])

  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} loop autoPlay muted type="video/mp4" />
      <div className='homeContent container'>
        <div className='textDiv'>
          <span data-aos="fade-up" className='smallText'>
            Our packages
          </span>
          <h1 data-aos="fade-up" className='homeTitle'>
            Search your holiday
          </h1>
        </div>

        <div data-aos="fade-up" className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor='city'>Search your destionation</label>
            <div className='input flex'>
              <input type='text' placeholder='Enter name here...' />
              <GrLocation className='icon' />
            </div>
          </div>
          <div className='destinationInput'>
            <label htmlFor='city'>Select your date</label>
            <div className='input flex'>
              <input type='date' />
            </div>
          </div>
          <div className='destinationInput'>
            <div className='label-total flex'>
              <label htmlFor='price'>Max price:</label>
              <h3 className='total'>
                $5000
              </h3>
            </div>
            <div className='input flex'>
              <input type='range' max="5000" min="1000" />
            </div>
          </div>

          <div className='searchOptions flex'>
            <FaFilter className='icon' />
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div data-aos="fade-up" className='homeFooterIcons flex'>
          <div className='leftIcons'>
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTelegram className="icon" />
          </div>
          <div className='rightIcons'>
            <TbApps className="icon" />
            <RiMenuAddFill className="icon" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
