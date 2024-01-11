import { Fragment } from "react";
import MiniNavigationSystem from "../../components/MiniNavigationSystem/MiniNavigationSystem";
import AuthorComponent from "../../components/AuthorComponent/AuthorComponent";
import ForPartnerComponent from "../../components/ForPartnerComponent/ForPartnerComponent";
import RecentProjectSlider from "../../components/RecentProjectSlider/RecentProjectSlider";
function AuthorSectionsPage() {
    return ( 
        <Fragment>
            <MiniNavigationSystem/>
            <AuthorComponent/>
            <ForPartnerComponent/>
            <RecentProjectSlider/>
        </Fragment>
    );
}

export default AuthorSectionsPage;