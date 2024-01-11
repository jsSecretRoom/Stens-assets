import { Fragment } from "react";
import SliderPreazent from "../../components/SliderPreazent/SliderPreazent";
import TechnologiesChapter from "../../components/TechnologiesChapter/TechnologiesChapter";
import ClutchComponent from "../../components/ClutchComponent/ClutchComponent";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import ForPartnerComponent from "../../components/ForPartnerComponent/ForPartnerComponent";
import Achievements from "../../components/Achievements/Achievements";
import PartnersComponent from "../../components/PartnersComponent/PartnersComponent";
import ContactsComponent from "../../components/ContactsComponent/ContactsComponent";
function HomePage() {
    return ( 
        <Fragment>
            <SliderPreazent/>
            <TechnologiesChapter/>
            <ClutchComponent/>
            <ServicesComponent/>
            <ForPartnerComponent/>
            <Achievements/>
            <PartnersComponent/>
            <ContactsComponent/>
        </Fragment>
    );
}

export default HomePage;