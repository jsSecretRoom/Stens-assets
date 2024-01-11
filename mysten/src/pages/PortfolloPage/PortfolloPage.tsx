
import { Fragment } from "react";
import MiniNavigationSystem from "../../components/MiniNavigationSystem/MiniNavigationSystem";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import StensAsetPortfolioComponent from "../../components/StensAsetPortfolioComponent/StensAsetPortfolioComponent";
import ForPartnerComponent from "../../components/ForPartnerComponent/ForPartnerComponent";
import ContactsComponent from "../../components/ContactsComponent/ContactsComponent";

function PortfolloPage() {
    return ( 
        <Fragment>
            <MiniNavigationSystem/>
            <TitleComponent/>
            <StensAsetPortfolioComponent/>
            <ForPartnerComponent/>
            <ContactsComponent/>
        </Fragment>
    );
}

export default PortfolloPage;