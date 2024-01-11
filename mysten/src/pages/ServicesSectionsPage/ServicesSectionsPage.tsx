
import { Fragment } from "react";

import TitleComponent from "../../components/TitleComponent/TitleComponent"; 
import ParagraphComponent from "../../components/ParagraphComponent/ParagraphComponent";


function ServicesSectionsPage() {
    // const { SERVICES, ServicesSections } = useParams();

    return ( 
        <Fragment>
            <TitleComponent/>
            <ParagraphComponent/>
        </Fragment>

    );
}

export default ServicesSectionsPage;