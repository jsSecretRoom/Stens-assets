import Slider from 'react-slick';
import React from 'react';
import { NavLink } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderPreazent.scss';

import sliderImg1 from '../../assets/slider-img/Mask Group.svg';
import sliderImg2 from '../../assets/slider-img/Mask Group-1.svg';
import sliderImg3 from '../../assets/slider-img/Mask Group-2.svg';

const sliders = [sliderImg1, sliderImg2, sliderImg3];

function SliderPreazent() {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        beforeChange: (current, next) => setCurrentSlide(next),
        customPaging: function (i) {
            const isActive = i === currentSlide;
            const backgroundColor = isActive ? 'white' : 'transparent';

            return (
                <div
                    style={{
                        width: '15px',
                        height: '15px',
                        background: backgroundColor,
                        border: '3px solid white',
                        borderRadius: '50px',
                    }}
                ></div>
            );
        },
    };

    return (
        <section className='home-slider'>
            <Slider {...settings}>
                {sliders.map((item, id) => (
                    <div className='slider' key={id}>
                        <img src={item} alt={`slide${id}`} />
                    </div>
                ))}
            </Slider>
            <div className='info-company'>
                <h3>stan’s assets - IT Outsourcing Development Company</h3>
                <NavLink to={''}>FOCUS ON THE PRODUCT AND LET US DO THE REST!</NavLink>
                <div className='paragraph'>
                    <p>Forgot about the stress because of missed deadlines. Save time and resources on development — Stan’s Assets engineers for hire will do it for you. </p>
                    <p>Our primary value is transparent client-company relationships.</p>
                    <p>Our biggest draws are considerable experience in AAA projects, sleek and understandable code, effective plugins and tools designed to save your time.</p>
                    <p>Find out what else we can do.</p>
                </div>
                <div className='button-conteiner'>
                    <button>MORE</button>
                    <button>Contact us</button>
                </div>
            </div>
        </section>
    );
}

export default SliderPreazent;