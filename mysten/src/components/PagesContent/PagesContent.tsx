import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PagesContent() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/home");
    }, []);

    return ( 
        <main>
            <Outlet/>
        </main>
    );
}

export default PagesContent;