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
        cardtxt: 'Mobile Application Development'
    },
    {
        cardimg: jostic,
        cardtxt: 'Game development outsourcing'
    },
    {
        cardimg: vr,
        cardtxt: 'vr app development'
    },
    {
        cardimg: user,
        cardtxt: 'Dedicated Developers'
    },
    {
        cardimg: setings,
        cardtxt: 'sdk development'
    },
    {
        cardimg: cube,
        cardtxt: 'sdk 3d modeling '
    },
    {
        cardimg: arapp,
        cardtxt: 'ar app development'
    }
]

function CardForServicesComponent() {
    return ( 
        <section className="card-for-services">
            <NavLink to={''}>Services</NavLink>
            <div className="card-conteiner">
                {cardObjects.map((item, index) => (
                    <div className="services-card" key={index}>
                        <img src={item.cardimg} alt="cardimg"/>
                        <div className="card-paragraph">
                            <NavLink to={''}>{item.cardtxt}</NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CardForServicesComponent;