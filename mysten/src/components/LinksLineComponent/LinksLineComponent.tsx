import './LinksLineComponent.scss';

import { NavLink } from "react-router-dom";

import facebook from '../../assets/links-line/facebuk.svg';
import linkedin from '../../assets/links-line/linkedin.svg';
import skupe from '../../assets/links-line/skupe.svg';
import vatsap from '../../assets/links-line/vatsap.svg';

function LinksLineComponent() {
    return ( 
        <section className="links-line">
            <div className='links-line-boady'>
                <div className="links-line-conteiner">
                    <NavLink to={''}> <img src={facebook} alt="facebook" /> </NavLink>
                    <NavLink to={''}> <img src={linkedin} alt="linkedin" /> </NavLink>
                    <NavLink to={''}> <img src={skupe} alt="skupe" /> </NavLink>
                    <NavLink to={''}> <img src={vatsap} alt="vatsap" /> </NavLink>
                </div>
            </div>
        </section>
    );
}

export default LinksLineComponent;