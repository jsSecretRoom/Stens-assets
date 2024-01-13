import './HeaderComponent.scss';

import companyLogo from '../../assets/icon/logoSA_010 1.svg';
import DropdownComponent from '../DropdownComponent/DropdownComponent';


import { NavLink } from 'react-router-dom';
import ContactsButton from '../../buttonsComponents/ContactsButton/ContactsButton';
import MainBurgerButton from '../../buttonsComponents/MainBurgerButton/MainBurgerButton';

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
    
    return ( 
        <header>
            <div className='header-conteiner'>
                <section className='logo'>
                    <img src={companyLogo} alt="companyLogo" />
                </section>
                <section className='main-list'>
                    <DropdownComponent dropdownName={'Services'} serviceNames={serviceNames} />
                    <DropdownComponent dropdownName={'Technologies'} serviceNames={technologiesName} />
                    <NavLink to={'/home/Products'}>PRODUCTS</NavLink>
                    <NavLink to={'/home/Portfolio'}>PORTFOLIO</NavLink>
                    <NavLink to={'/home/Blog'}>BLOG</NavLink>
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