import './HeaderComponent.scss';

import companyLogo from '../../assets/icon/logoSA_010 1.svg';
import companyLogoNegativ from '../../assets/icon/company-logo-negativ.svg';
import DropdownComponent from '../DropdownComponent/DropdownComponent';


import { useLocation } from 'react-router-dom';

import ContactsButton from '../../buttonsComponents/ContactsButton/ContactsButton';
import MainBurgerButton from '../../buttonsComponents/MainBurgerButton/MainBurgerButton';
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

function HeaderComponent() {
    const location = useLocation();
    const pathnames = location.pathname;

    return ( 
        <header>
            <div className='header-conteiner' style={{backgroundColor: `${(pathnames === '/home') ? 'rgba(0, 0, 0, 0.5)' : 'rgb(255, 255, 255)'}`}}>
                <section className='logo'>
                <img src={`${(pathnames === '/home' ? companyLogo : companyLogoNegativ) }`} alt="companyLogo" />
                </section>
                <section className='main-list'>
                    <DropdownComponent dropdownName={'Services'} serviceNames={serviceNames} />
                    <DropdownComponent dropdownName={'Technologies'} serviceNames={technologiesName} />
                    <LinksGroupComponent/>
                    <DropdownComponent dropdownName={'About_us'} serviceNames={aboutAsName} />
                </section>
                <section className='ficha'>
                    <ContactsButton/>
                    <MainBurgerButton/>
                </section>
            </div>
        </header>
    );
}

export default HeaderComponent;