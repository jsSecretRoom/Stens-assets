
import { Fragment } from "react";
import MiniNavigationSystem from "../../components/MiniNavigationSystem/MiniNavigationSystem";
import BlogComponent from "../../components/BlogComponent/BlogComponent";

import decoHeader from '../../assets/company-logo/header-decoration.svg';
import decoFooter from '../../assets/company-logo/footer-Decoration.svg';


function BlogPage() {
    return ( 
        <section>
            <Fragment>
                <MiniNavigationSystem/>
                <section className='parther-setings'>
                    <div className="deco-header"><img src={decoHeader} alt="decoHeader" /></div>
                        <BlogComponent/>
                    <div className="deco-footer"><img src={decoFooter} alt="decoFooter" /></div>
                </section>
                
            </Fragment>
        </section>
    );
}

export default BlogPage;