import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import ParagraphComponent from "../../components/ParagraphComponent/ParagraphComponent";
import ForPartnerComponent from "../../components/ForPartnerComponent/ForPartnerComponent";
import ContactsComponent from "../../components/ContactsComponent/ContactsComponent";
import ClutchComponent from "../../components/ClutchComponent/ClutchComponent";
import CardForServicesComponent from "../../components/CardForServicesComponent/CardForServicesComponent";
import RecentProjectSlider from "../../components/RecentProjectSlider/RecentProjectSlider";
import FAQsComponent from "../../components/FAQsComponent/FAQsComponent";
import MiniNavigationSystem from "../../components/MiniNavigationSystem/MiniNavigationSystem";

import decoHeader from '../../assets/company-logo/header-decoration.svg';
import decoFooter from '../../assets/company-logo/footer-Decoration.svg';

import './ServicesPage.scss';

function ServicesPage() {
    return ( 
        
        <Fragment>

            <MiniNavigationSystem/>

            <Outlet/>
            <ClutchComponent/>
            <CardForServicesComponent/>
            <ForPartnerComponent/>
            <ParagraphComponent/>
            <ContactsComponent/>
            <section className='parther-setings'>
                <div className="deco-header"><img src={decoHeader} alt="decoHeader" /></div>
                <section className='slider-conteiner'>
                    <RecentProjectSlider/>
                </section>
                <div className="deco-footer"><img src={decoFooter} alt="decoFooter" /></div>
            </section>
            
            <FAQsComponent/>
        </Fragment>
        
    );
}

export default ServicesPage;