import Slider from 'react-slick';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderPreazent.scss';

import { faindWidthWindow } from '../../reuseFunctions';

import sliderImg1 from '../../assets/slider-img/Mask Group.svg';
import sliderImg2 from '../../assets/slider-img/Mask Group-1.svg';
import sliderImg3 from '../../assets/slider-img/Mask Group-2.svg';
import ParagraphsSlider from './ParagraphsSlider/ParagraphsSlider';

const sliders = [sliderImg1, sliderImg2, sliderImg3];

function SliderPreazent() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    faindWidthWindow(setWindowWidth);

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
        beforeChange: ( current, next) => setCurrentSlide(next),
        
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
        <section className='home-slider' style={{ minWidth: '1100px', overflow: 'hidden' }}>
            <Slider {...settings}>
                {sliders.map((item, id) => (
                    
                    <div className='slider' key={id} >
                        <img src={item} alt={`slide${id}`} />
                        <div className='info-company'>
                            <div className='slide-content'>
                                <div className='setings-position-component'>
                                    <h3>stan’s assets - IT Outsourcing Development Company</h3>
                                    <NavLink to={'/home/Products'}>FOCUS ON THE PRODUCT AND LET US DO THE REST!</NavLink>
                    
                                    {(windowWidth < 1080) ? '' : <ParagraphsSlider/> } 
                                    
                                    <div className='button-conteiner' >
                                        <NavLink to={'/home/About_us/Specialization'}>MORE</NavLink>
                                        <NavLink to={'/home/About_us/Contacts'}>Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </Slider>
            
        </section>
    );
}

export default SliderPreazent;