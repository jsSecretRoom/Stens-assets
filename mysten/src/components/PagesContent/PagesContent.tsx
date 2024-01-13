import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LinksLineComponent from "../LinksLineComponent/LinksLineComponent";

function PagesContent() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/home");
    }, []);

    return ( 
        <main>
            <LinksLineComponent/>
            <Outlet/>
        </main>
    );
}

export default PagesContent;