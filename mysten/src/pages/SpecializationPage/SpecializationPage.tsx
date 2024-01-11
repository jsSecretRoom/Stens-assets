import { Fragment } from "react";
import MiniNavigationSystem from "../../components/MiniNavigationSystem/MiniNavigationSystem";
import SpecializationComponent from "../../components/SpecializationComponent/SpecializationComponent";
import ForPartnerComponent from "../../components/ForPartnerComponent/ForPartnerComponent";
import ContactsComponent from "../../components/ContactsComponent/ContactsComponent";
import RecentProjectSlider from "../../components/RecentProjectSlider/RecentProjectSlider";

function SpecializationPage() {
    return ( 
        <Fragment>
            <MiniNavigationSystem/>
            <SpecializationComponent/>
            <ForPartnerComponent/>
            <ContactsComponent/>
            <RecentProjectSlider/>
        </Fragment>
    );
}

export default SpecializationPage;