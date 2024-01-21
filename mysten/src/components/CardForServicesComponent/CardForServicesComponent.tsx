import './CardForServicesComponent.scss';

import { NavLink } from "react-router-dom";

import phone from '../../assets/services-images/phone.svg'
import jostic from '../../assets/services-images/jostic.svg'
import vr from '../../assets/services-images/vr.svg'
import user from '../../assets/services-images/user.svg'
import setings from '../../assets/services-images/setings.svg'
import cube from '../../assets/services-images/cube.svg'
import arapp from '../../assets/services-images/arapp.svg'

const cardObjects = [
    {
        cardimg: phone,
        cardtxt: 'Mobile Application Development',
        linkPath: '/home/Services/Mobile%20Application%20Development'
    },
    {
        cardimg: jostic,
        cardtxt: 'Game development outsourcing',
        linkPath: '/home/Services/Game%20Development%20Outsourcing'
    },
    {
        cardimg: vr,
        cardtxt: 'vr app development',
        linkPath: '/home/Services/VR%20App%20Development'
    },
    {
        cardimg: user,
        cardtxt: 'Dedicated Developers',
        linkPath: '/home/Services/Dedicated%20Developers'
    },
    {
        cardimg: setings,
        cardtxt: 'sdk development',
        linkPath: '/home/Services/SDK%20Development'
    },
    {
        cardimg: cube,
        cardtxt: 'sdk 3d modeling ',
        linkPath: '/home/Services/3D%20Modeling%20Services'
    },
    {
        cardimg: arapp,
        cardtxt: 'ar app development',
        linkPath: '/home/Services/AR%20App%20Development'
    }
]

function CardForServicesComponent() {
    return ( 
        <section className="card-for-services">
            <p>Services</p>
            <div className="card-conteiner">
                {cardObjects.map((item, index) => (
                    <div className="services-card" key={index}>
                        <img src={item.cardimg} alt="cardimg"/>
                        <div className="card-paragraph">
                            <NavLink to={item.linkPath}>{item.cardtxt}</NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CardForServicesComponent;