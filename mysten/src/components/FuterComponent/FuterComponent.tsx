import './FuterComponent.scss';

import { NavLink } from 'react-router-dom';

import futerCap from '../../assets/decoration/footer-Cap.svg';

import stenImgWite from '../../assets/icon/stensasset-white.svg';

import faseBookImg from '../../assets/icon/facebook-24px 1.svg';
import inImg from '../../assets/icon/inlogo.svg';
import phoneimg from '../../assets/icon/phone-24px 1.svg';
import skupeImg from '../../assets/icon/skupe.svg';
import gitImg from '../../assets/icon/git-logo.svg';

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
                        <div className='footer-services'>
                            <h2>Services</h2>
                            <ul>
                            
                                <li><NavLink to={''}>Mobile Application Development</NavLink></li>
                                <li><NavLink to={''}>Game Development Outsourcing</NavLink></li>
                                <li><NavLink to={''}>VR App Development</NavLink></li>
                                <li><NavLink to={''}>Dedicated Developers</NavLink></li>
                                <li><NavLink to={''}>SDK Development</NavLink></li>
                                <li><NavLink to={''}>3D Modeling services</NavLink></li>
                            </ul>
                        </div>
                        <div className='tehnologies'>
                            <h2>Services</h2>
                            <ul>
                                <li><NavLink to={''}>Android</NavLink></li>
                                <li><NavLink to={''}>IOS</NavLink></li>
                                <li><NavLink to={''}>Unity</NavLink></li>
                            </ul>
                        </div>
                        <div className='products'>
                            <ul>
                                <li><NavLink to={''}>Products</NavLink></li>
                                <li><NavLink to={''}>Portfolio</NavLink></li>
                                <li><NavLink to={''}>Blog</NavLink></li>
                            </ul>
                        </div>
                        <div className='about-us'>
                            <h2>About us</h2>
                            <ul>
                                <li><NavLink to={''}>Contacts</NavLink></li>
                                <li><NavLink to={''}>Team</NavLink></li>
                                <li><NavLink to={''}>Join the Team</NavLink></li>
                            </ul>
                        </div>
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