

import { Fragment } from "react";
import MiniNavigationSystem from "../../components/MiniNavigationSystem/MiniNavigationSystem";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import ForPartnerComponent from "../../components/ForPartnerComponent/ForPartnerComponent";
import ContactsComponent from "../../components/ContactsComponent/ContactsComponent";
import StenProductsComponent from "../../components/StenProductsComponent/StenProductsComponent";


function ProductsPage() {
    return ( 
        <Fragment>
            <MiniNavigationSystem/>
            <TitleComponent/>
            <StenProductsComponent/>
            <ForPartnerComponent/>
            <ContactsComponent/>
            
        </Fragment>
    );
}

export default ProductsPage;