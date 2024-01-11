
import { Fragment } from "react";
import MiniNavigationSystem from "../../components/MiniNavigationSystem/MiniNavigationSystem";
import BlogComponent from "../../components/BlogComponent/BlogComponent";

function BlogPage() {
    return ( 
        <section>
            <Fragment>
                <MiniNavigationSystem/>
                <BlogComponent/>
            </Fragment>
        </section>
    );
}

export default BlogPage;