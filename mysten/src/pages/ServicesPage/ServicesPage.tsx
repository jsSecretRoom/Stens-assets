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
            <RecentProjectSlider/>
            <FAQsComponent/>
        </Fragment>
        
    );
}

export default ServicesPage;