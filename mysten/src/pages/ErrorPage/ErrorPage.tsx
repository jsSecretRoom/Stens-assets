import './ErrorPage.scss';

import { Fragment } from "react";
import ForPartnerComponent from "../../components/ForPartnerComponent/ForPartnerComponent";
import ContactsComponent from "../../components/ContactsComponent/ContactsComponent";
import { NavLink } from "react-router-dom";

import errorImg from '../../assets/icon/404arrir-img.svg';

function ErrorPage() {
    return ( 
        <Fragment>
            <main className='error-page'>
                <div className="error">
                    <img src={errorImg} alt="errorImg" />
                    <div className="deskription">
                        <h2> it looks like you are lost</h2>
                        <NavLink to={'/home'}>Return to homepage</NavLink>
                    </div>
                </div>
                <ForPartnerComponent/>
                <ContactsComponent/>
            </main>
        </Fragment>
    );
}

export default ErrorPage;