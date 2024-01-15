import './ContactsListComponent.scss';

import locationImg from '../../assets/icon/location_on-24px 1.svg';
import phoneImg from '../../assets/icon/phone-24px 1.svg';
import viberImg from '../../assets/icon/whatsapp (1) 1.svg';
import skupeImg from '../../assets/icon/skupe.svg';
import emailImg from '../../assets/icon/email-24px 1.svg';
import facebukImg from '../../assets/icon/facebook-24px 1.svg';

function ContactsListComponent() {
    return ( 
        <div className='contacts-list'>
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
        </div>
        
    );
}

export default ContactsListComponent;