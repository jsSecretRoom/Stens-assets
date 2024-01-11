import './PartnersComponent.scss';

import { NavLink } from 'react-router-dom';

import partner1 from '../../assets/company-logo/Group 685.svg'
import partner2 from '../../assets/company-logo/Group 686.svg'
import partner3 from '../../assets/company-logo/Group 687.svg'
import partner4 from '../../assets/company-logo/Group 688.svg'
import partner5 from '../../assets/company-logo/Group 689.svg'
import partner6 from '../../assets/company-logo/Group 690.svg'
import partner7 from '../../assets/company-logo/Group 691.svg'
import partner8 from '../../assets/company-logo/Group 692.svg'
import partner9 from '../../assets/company-logo/Group 693.svg'
import partner10 from '../../assets/company-logo/Group 694.svg'
import partner11 from '../../assets/company-logo/Group 695.svg'
import partner12 from '../../assets/company-logo/Group 696.svg'
import partner13 from '../../assets/company-logo/Group 697.svg'
import partner14 from '../../assets/company-logo/Group 698.svg'

import decorationBacground from '../../assets/decoration/Vector 8.svg';

const CompanyLogos = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10, partner11, partner12, partner13, partner14];

function PartnersComponent() {
    return ( 
        <section className='img-deco'>
            <img className='deco-bacground' src={decorationBacground} alt="decorationBacground" />
            <section className="partners-info">
                
                <NavLink  to={''}>Partners</NavLink>
                
                <div className='partners-conteiner'>
                    {CompanyLogos.map((item, index) => (
                        <div className="partner" key={index}>
                            <img src={item} alt="" />
                            <div className="shedou-effect"></div>
                        </div>
                    ))}
                </div>

            </section>
        </section>
        
    );
}

export default PartnersComponent;