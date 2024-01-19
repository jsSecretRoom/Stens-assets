import './ContactsButton.scss';

import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GetContactsPortallState } from '../../redux/Actions/BooleanActions';
import { RootState } from '../../redux/RootReducer';

function ContactsButton() {

    const dispatch = useDispatch();

    const location = useLocation();
    const pathnames = location.pathname;

    const mainPortallState = useSelector((state: RootState ) => state.getboolean.closeOpenContacts);
    

    return ( 
        <button onClick={() => dispatch(GetContactsPortallState(!mainPortallState))} className={`contact-button ${pathnames === '/home' ? '' : 'deco'}`}>
            CONTACT US
        </button>
    );
}

export default ContactsButton;