import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LinksLineComponent from "../LinksLineComponent/LinksLineComponent";

function PagesContent() {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        navigate("/home");
    }, []);

    useEffect(() => {
        // Прокручиваем страницу вверх при изменении местоположения
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return ( 
        <main>
            <LinksLineComponent/>
            <Outlet/>
        </main>
    );
}

export default PagesContent;