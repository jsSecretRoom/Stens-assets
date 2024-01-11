import './ContactsComponent.scss';
import { NavLink } from 'react-router-dom';
import decoImg from '../../assets/decoration/decoContacts.svg'

import locationImg from '../../assets/icon/location_on-24px 1.svg';
import phoneImg from '../../assets/icon/phone-24px 1.svg';
import viberImg from '../../assets/icon/whatsapp (1) 1.svg';
import skupeImg from '../../assets/icon/skupe.svg';
import emailImg from '../../assets/icon/email-24px 1.svg';
import facebukImg from '../../assets/icon/facebook-24px 1.svg';

function ContactsComponent() {
    return ( 
        <section className='contacts'>
            <NavLink to={''}>CONTACTS</NavLink>
            <div className='welcome'>
                <p>We are open for dialog and you are welcome to share your opinions or thoughts with us</p>
                <p>Hit us up any time through email with any idea and help us turn your great ideas into brilliant projects</p>
            </div>
            
            <div className='contacts-conteiner'>
                <ul className='contacts-info'>
                    <li>
                        <img src={locationImg} alt="locationImg" />
                        <p>Ukraine, Kyiv, Rodyny Kristeriv 20B, office 188</p>
                    </li>
                    <li>
                        <img src={phoneImg} alt="phoneImg" />
                        <p>+38 (093) 345 56 76</p>
                    </li>
                    <li>
                        <img src={viberImg} alt="viberImg" />
                        <p>+38 (093) 345 56 77</p>
                    </li>
                    <li>
                        <img src={skupeImg} alt="skupeImg" />
                        <p>Stanassets</p>
                    </li>
                    <li>
                        <img src={emailImg} alt="emailImg" />
                        <p>stanAssets@gmail.com</p>
                    </li>
                    <li>
                        <img src={facebukImg} alt="facebukImg" />
                        <p>facebook.com/Stanassets</p>
                    </li>
                    
                </ul>
                <div className='contact-form'>
                    <img src={decoImg} alt="decoImg" />
                    <div className='form-conteiner'>
                        <form action="">
                            <input type="text" placeholder='Name'/>
                            <input type="email" name="" id="" placeholder='Email'/>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Massage'></textarea>
                            <button>Send request</button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default ContactsComponent;