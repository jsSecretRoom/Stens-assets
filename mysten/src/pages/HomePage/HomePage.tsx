import { Fragment } from "react";
import SliderPreazent from "../../components/SliderPreazent/SliderPreazent";
import TechnologiesChapter from "../../components/TechnologiesChapter/TechnologiesChapter";
import ClutchComponent from "../../components/ClutchComponent/ClutchComponent";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import ForPartnerComponent from "../../components/ForPartnerComponent/ForPartnerComponent";
import Achievements from "../../components/Achievements/Achievements";
import PartnersComponent from "../../components/PartnersComponent/PartnersComponent";
import ContactsComponent from "../../components/ContactsComponent/ContactsComponent";

import { useState } from "react";
import { faindWidthWindow } from "../../reuseFunctions";
import ParagraphsSlider from "../../components/SliderPreazent/ParagraphsSlider/ParagraphsSlider";

import './HomePage.scss';
import decoHeader from '../../assets/company-logo/header-decoration.svg';
import decoFooter from '../../assets/company-logo/footer-Decoration.svg';


function HomePage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    faindWidthWindow(setWindowWidth);

    return ( 
        <Fragment>
            <SliderPreazent/>
            <div style={{margin: '28px'}}>
                {(windowWidth < 1080) ? <ParagraphsSlider/> : '' } 
            </div>
            <TechnologiesChapter/>
            <ClutchComponent/>
            <ServicesComponent/>
            <ForPartnerComponent/>
            <Achievements/>
            <section className='parther-setings'>
                <div className="deco-header"><img src={decoHeader} alt="decoHeader" /></div>
                <div className="decobody">
                    <PartnersComponent/>
                </div>
                <div className="deco-footer"><img src={decoFooter} alt="decoFooter" /></div>
            </section>
            <ContactsComponent/>
        </Fragment>
    );
}

export default HomePage;