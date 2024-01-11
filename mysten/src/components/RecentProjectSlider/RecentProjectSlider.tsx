import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RecentProjectSlider.scss';

import decoBacgground from '../../assets/decoration/Vector 8.svg'
import slide1 from '../../assets/recent-slider-img/Group 700.png'
import slide2 from '../../assets/recent-slider-img/Mask Group.png'
import slide3 from '../../assets/recent-slider-img/image 3.png'

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 7000,
    }

    return ( 
        <section className='ricent-slider-conteioner'>
            <img src={decoBacgground} alt="decoBacgground" />
            <div className='slider-conteiner'>
                <div className='slider'>
                    <NavLink to={''}>Recent Projects</NavLink>
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
            </div>
        </section>
    );
}

export default RecentProjectSlider;