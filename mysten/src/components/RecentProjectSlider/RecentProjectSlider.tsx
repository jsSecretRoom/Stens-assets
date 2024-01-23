import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RecentProjectSlider.scss';

import slide2 from '../../assets/recent-slider-img/Group 700.png'
import slide3 from '../../assets/recent-slider-img/Mask Group.png'
import slide1 from '../../assets/recent-slider-img/image 3.png'

const sliders = [
    {
        img: slide1,
        header: 'Ori and the will of the wisps ',
        paragraph: 'This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.'
    },
    {
        img: slide2,
        header: 'tin hearts',
        paragraph: 'This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.'
    },
    {
        img: slide3,
        header: 'stickman trials',
        paragraph: 'This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.'
    }

]

function RecentProjectSlider() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [sliderCount, setSliderCount] = useState(3);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []); // Пустой массив зависимостей означает, что эффект будет запущен только один раз при монтировании
    
    useEffect(() => {
        if (windowWidth < 1024) {
          setSliderCount(1);
        } else if (windowWidth < 1450) {
          setSliderCount(2);
        } else {
          setSliderCount(3); // Возвращаем значение по умолчанию, если не выполняется ни одно из условий
        }
    }, [windowWidth]);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: sliderCount,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    return ( 
        <div className='recent-slider'>
            <NavLink to={'/'}>Recent Projects</NavLink>
            <Slider {...settings}>

                {sliders.map((item, id) => (
                    <div>
                        <div className='ricent-slider'>
                            <div className='foto'>
                                <img src={item.img} alt={`slide${id}`} />
                            </div>
                            <div className='description'>
                                <NavLink to={''}>{item.header}</NavLink>
                                <div className='parafraph-conteiner'>
                                    <p>{item.paragraph}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))} 
                {sliders.map((item, id) => (
                    <div>
                        <div className='ricent-slider'>
                            <div className='foto'>
                                <img src={item.img} alt={`slide${id}`} />
                            </div>
                            <div className='description'>
                                <NavLink to={''}>{item.header}</NavLink>
                                <div className='parafraph-conteiner'>
                                    <p>{item.paragraph}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))} 

            </Slider>
        </div>
    );
}

export default RecentProjectSlider;