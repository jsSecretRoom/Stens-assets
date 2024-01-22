import { Fragment } from "react";

import './ContactsPage.scss';

import ForPartnerComponent from "../../components/ForPartnerComponent/ForPartnerComponent";
import RecentProjectSlider from "../../components/RecentProjectSlider/RecentProjectSlider";
import MiniNavigationSystem from "../../components/MiniNavigationSystem/MiniNavigationSystem";

// import decoImg from '../../assets/decoration/services-deco4.svg'
// import { NavLink } from "react-router-dom";
import ContactsFormComponent from "../../components/ContactsFormComponent/ContactsFormComponent";

function ContactsPage() {
    return ( 
        <Fragment>
            <MiniNavigationSystem/>
            <section className="team-hed">
                <div className="contacts-header">
                    <h2>Contact Us</h2>
                    <p>We are open for dialog and you are welcome to share your opinions or thoughts with us</p>
                </div>
                <div className="form-conteiner">
                    <ContactsFormComponent/>
                </div>
                
            </section>
            <ForPartnerComponent/>
            <RecentProjectSlider/>
            
        </Fragment>
    );
}

export default ContactsPage;