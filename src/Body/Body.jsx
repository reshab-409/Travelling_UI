import React, { useEffect } from 'react';
import img from './images/img.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpeg';
import img7 from './images/img7.webp';
import img8 from './images/img8.jpg';
import img9 from './images/img9.webp';
import { GrLocation } from 'react-icons/gr';
import { BsClipboardCheck } from 'react-icons/bs';
import './Body.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Body = () => {

    const Data = [
        {
            id: 1,
            imgSrc: img,
            destTitle: 'Bora Bora',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$600',
            description: "If your project grows in size, this option is available. This method has the trade-off that it takes a long time to install the package. Suitable for MeteorJS, Gatsbyjs etc."

        }, {
            id: 2,
            imgSrc: img2,
            destTitle: 'Bora Bora',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$200',
            description: "If your project grows in size, this option is available. This method has the trade-off that it takes a long time to install the package. Suitable for MeteorJS, Gatsbyjs etc."

        },
        {
            id: 3,
            imgSrc: img3,
            destTitle: 'Bora Bora',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$150',
            description: "If your project grows in size, this option is available. This method has the trade-off that it takes a long time to install the package. Suitable for MeteorJS, Gatsbyjs etc."

        },
        {
            id: 4,
            imgSrc: img4,
            destTitle: 'Bora Bora',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$700',
            description: "If your project grows in size, this option is available. This method has the trade-off that it takes a long time to install the package. Suitable for MeteorJS, Gatsbyjs etc."

        },
        {
            id: 5,
            imgSrc: img5,
            destTitle: 'Bora Bora',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$350',
            description: "If your project grows in size, this option is available. This method has the trade-off that it takes a long time to install the package. Suitable for MeteorJS, Gatsbyjs etc."

        },
        {
            id: 6,
            imgSrc: img6,
            destTitle: 'Bora Bora',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$600',
            description: "If your project grows in size, this option is available. This method has the trade-off that it takes a long time to install the package. Suitable for MeteorJS, Gatsbyjs etc."

        },
        {
            id: 7,
            imgSrc: img7,
            destTitle: 'Bora Bora',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$200',
            description: "If your project grows in size, this option is available. This method has the trade-off that it takes a long time to install the package. Suitable for MeteorJS, Gatsbyjs etc."

        },
        {
            id: 8,
            imgSrc: img8,
            destTitle: 'Bora Bora',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$500',
            description: "If your project grows in size, this option is available. This method has the trade-off that it takes a long time to install the package. Suitable for MeteorJS, Gatsbyjs etc."

        },
        {
            id: 9,
            imgSrc: img9,
            destTitle: 'Bora Bora',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$300',
            description: "If your project grows in size, this option is available. This method has the trade-off that it takes a long time to install the package. Suitable for MeteorJS, Gatsbyjs etc."

        }

    ];


    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <section className='main container section'>
            <div className='secTitle'>
                <h3  data-aos="fade-right" className='title'>
                    Most visited destionation
                </h3>
            </div>
            <div className='secContent grid'>
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div data-aos="fade-up" key={id} className='singleDestination'>
                                <div className='imageDiv'>
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className='cardInfo'>
                                    <h4 className='destTitle'>
                                        {destTitle}
                                    </h4>
                                    <span className='continent flex'>
                                        <GrLocation className='icon' />
                                        <span className='name'>{location}</span>
                                    </span>
                                    <div className='fees flex'>
                                        <div className='grade'>
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className='price'>
                                            <h5>
                                                {fees}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className='desc'>
                                        <p>{description}</p>
                                    </div>
                                    <button className='btn flex'>
                                        DETAILS
                                        <BsClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Body;
