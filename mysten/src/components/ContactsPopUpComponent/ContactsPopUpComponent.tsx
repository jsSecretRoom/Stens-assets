import './ContactsPopUpComponent.scss';

import ReactDOM from 'react-dom';

import { useDispatch, useSelector } from 'react-redux';
import { GetContactsPortallState } from '../../redux/Actions/BooleanActions';
import { RootState } from '../../redux/RootReducer'; 
// import ContactsComponent from '../ContactsComponent/ContactsComponent';
import ContactsFormComponent from '../ContactsFormComponent/ContactsFormComponent';

const ContactsPortalWrapper = ({ children, container } : {children: any, container: any}) => {
    return ReactDOM.createPortal(children, container);
};

function ContactsPopUpComponent() {

    const dispatch = useDispatch();
    const mainPortallState = useSelector((state: RootState ) => state.getboolean.closeOpenContacts);
    const contactsPortalContainer = document.getElementById('contactUsPopUp-root');

    const togglePortal = () => {
        dispatch(GetContactsPortallState(!mainPortallState));
    };

    return ( 
        <ContactsPortalWrapper container={contactsPortalContainer}>
            <section className='contactsPortal'>
                <div className={`contacts-portal-conteiner ${mainPortallState ? 'activ' : ''}`}>
                    <div className="contacts-portal-content">
                        <div className='close-conteiner'>
                            <p onClick={togglePortal}>Close</p>
                        </div>
                        <ContactsFormComponent/>
                        <ul>
                            <li>Cookies policy</li>
                            <li>Privacy policy</li>
                            <li>© 2021 - Stan’s Assets. All Right Reserved</li>
                        </ul>
                    </div>
                </div>
            </section>
        </ContactsPortalWrapper>
    );
}

export default ContactsPopUpComponent;