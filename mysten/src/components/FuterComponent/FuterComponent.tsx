import './FuterComponent.scss';

import { NavLink } from 'react-router-dom';

import futerCap from '../../assets/decoration/footer-Cap.svg';
import stenImgWite from '../../assets/icon/stensasset-white.svg';
import faseBookImg from '../../assets/icon/facebook-24px 1.svg';
import inImg from '../../assets/icon/inlogo.svg';
import phoneimg from '../../assets/icon/phone-24px 1.svg';
import skupeImg from '../../assets/icon/skupe.svg';
import gitImg from '../../assets/icon/git-logo.svg';

import MainPopUpDropdownComponent from '../MainPopUpComponent/MainPopUpDropdownComponent/MainPopUpDropdownComponent';
import LinksGroupComponent from '../LinksGroupComponent/LinksGroupComponent';



const serviceNames = [
    "Mobile Application Development",
    "Game Development Outsourcing",
    "VR App Development",
    "Dedicated Developers",
    "SDK Development",
    "3D Modeling Services",
    "AR App Development"
];
  
const technologiesName = [
    "Android Technologies",
    "iOS Technologies",
    "Unity Technologies"
];
  
const aboutAsName = [
    "Specialization",
    "Team",
    "Join_The_Team",
    "Contacts"
    
];


function FuterComponent() {

    return ( 
        <footer>
            <section className='futer-conteiner'>
                <img src={futerCap} alt="futerCap" />
                <div className='futer-content'>
                    
                    <section className='content'>
                        <div className='contact-us-footer'>
                            <div className='stens-img-wite'>
                                <img src={stenImgWite} alt="stenImgWite" />
                            </div>
                            <div className='sociall-links'>
                                <NavLink to={''}><img src={faseBookImg} alt="faseBookImg" /></NavLink>
                                <NavLink to={''}><img src={inImg} alt="inImg" /></NavLink>
                                <NavLink to={''}><img src={phoneimg} alt="phoneimg" /></NavLink>
                                <NavLink to={''}><img src={skupeImg} alt="skupeImg" /></NavLink>
                                <NavLink to={''}><img src={gitImg} alt="gitImg" /></NavLink> 
                            </div>
                        </div>
                        <section className='site-navigation'>
                            <MainPopUpDropdownComponent dropdownName={'Services'} serviceNames={serviceNames}/>
                            <MainPopUpDropdownComponent dropdownName={'Technologies'} serviceNames={technologiesName}/>
                            <LinksGroupComponent/>
                            <MainPopUpDropdownComponent dropdownName={'About_us'} serviceNames={aboutAsName}/>
                        </section>
                    </section>
                </div>

            </section>
            <section className='private-notation'>
                <p className='copy-right'>© 2021 - Stan’s Assets. All Right Reserved</p>
                <div className='group'>
                    <p>Privacy policy</p>
                    <p>Cookies policy</p>
                </div>
            </section>
        </footer>
    );
}

export default FuterComponent;