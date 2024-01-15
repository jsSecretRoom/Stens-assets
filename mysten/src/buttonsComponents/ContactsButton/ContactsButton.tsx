import './ContactsButton.scss';

import { useLocation } from 'react-router-dom';

function ContactsButton() {
    const location = useLocation();
    const pathnames = location.pathname;
    return ( 
        <button className={`contact-button ${pathnames === '/home' ? '' : 'deco'}`}>
            CONTACT US
        </button>
    );
}

export default ContactsButton;