import { Fragment } from "react";
import MiniNavigationSystem from "../../components/MiniNavigationSystem/MiniNavigationSystem";
import ForPartnerComponent from "../../components/ForPartnerComponent/ForPartnerComponent";
import RecentProjectSlider from "../../components/RecentProjectSlider/RecentProjectSlider";
import ContactsComponent from "../../components/ContactsComponent/ContactsComponent";
import CoreTeamComponent from "../../components/CoreTeamComponent/CoreTeamComponent";

function TeamPage() {
    return ( 
        
        <Fragment>
            <MiniNavigationSystem/>
            <CoreTeamComponent/>
            <ForPartnerComponent/>
            <ContactsComponent/>
            <RecentProjectSlider/>
        </Fragment>
        
    );
}

export default TeamPage;