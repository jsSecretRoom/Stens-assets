import { Fragment } from "react";

import MiniNavigationSystem from "../../components/MiniNavigationSystem/MiniNavigationSystem";
import ArticleComponent from "../../components/ArticleComponent/ArticleComponent";
import ForPartnerComponent from "../../components/ForPartnerComponent/ForPartnerComponent";
import RecentProjectSlider from "../../components/RecentProjectSlider/RecentProjectSlider";

function ArticlePage() {
    return ( 
        <Fragment>
            <MiniNavigationSystem/>
            <ArticleComponent/>
            <ForPartnerComponent/>
            <RecentProjectSlider/>
            
        </Fragment>
    );
}

export default ArticlePage;