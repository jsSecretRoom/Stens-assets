import './MainPopUpComponent.scss';

import ReactDOM from 'react-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/RootReducer'; 
import { GetMainPortallState } from '../../redux/Actions/BooleanActions';

import ContactsButton from '../../buttonsComponents/ContactsButton/ContactsButton';
import LinksGroupComponent from '../LinksGroupComponent/LinksGroupComponent';
import MainPopUpDropdownComponent from './MainPopUpDropdownComponent/MainPopUpDropdownComponent';

const MainPortalWrapper = ({ children, container } : {children: any, container: any}) => {
    return ReactDOM.createPortal(children, container);
};
 
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
 
function MainPopUpComponent() {

    const dispatch = useDispatch();
    const mainPortallState = useSelector((state: RootState ) => state.getboolean.closeOpenMain);
    const mainPortalContainer = document.getElementById('mainPopUp-root');

    
    const togglePortal = () => {
        dispatch(GetMainPortallState(!mainPortallState));
    };

    return ( 
        <MainPortalWrapper container={mainPortalContainer}>
            <section className='mainPortal'>
                <div className={`main-portal-conteiner ${mainPortallState ? 'activ' : ''}`}>
                    <div className="portal-content">
                        <section className='exit'>
                            <button onClick={togglePortal}>Close</button>
                        </section>
                        <section className='site-navigation'>
                            <MainPopUpDropdownComponent dropdownName={'Services'} serviceNames={serviceNames}/>
                            <MainPopUpDropdownComponent dropdownName={'Technologies'} serviceNames={technologiesName}/>
                            <LinksGroupComponent/>
                            <MainPopUpDropdownComponent dropdownName={'About_us'} serviceNames={aboutAsName}/>
                        </section>
                        <section className='popup-contacts'>
                            <ContactsButton buttonContent={''}/>
                        </section>
                    </div>
                </div>
            </section>

        </MainPortalWrapper>
    );
}

export default MainPopUpComponent;