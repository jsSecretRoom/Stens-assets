import './ContactsComponent.scss';
import { NavLink } from 'react-router-dom';

import decoImg from '../../assets/decoration/decoContacts.svg'

import ContactsListComponent from '../ContactsListComponent/ContactsListComponent';
import ContactsFormComponent from '../ContactsFormComponent/ContactsFormComponent';


function ContactsComponent() {
    return ( 
        <section className='contacts'>
            <NavLink to={'/home/About_us/Contacts'}>CONTACTS</NavLink>
            <div className='welcome'>
                <p>We are open for dialog and you are welcome to share your opinions or thoughts with us</p>
                <p>Hit us up any time through email with any idea and help us turn your great ideas into brilliant projects</p>
            </div>
            
            <div className='contacts-conteiner'>
                <ContactsListComponent/>
                <div className='contact-form'>
                    <img src={decoImg} alt="decoImg" />
                    <ContactsFormComponent/>
                </div>
            </div>
        </section>
    );
}

export default ContactsComponent;