import './SpecializationComponent.scss';


import { NavLink } from "react-router-dom";

import deco1 from '../../assets/decoration/services-deco3.svg';
import deco2 from '../../assets/decoration/services-deco2.svg';
import deco3 from '../../assets/decoration/services-deco4.svg';



function SpecializationComponent() {
    return ( 
        <section className="company-specialization">
            <div className="block-conteiner">
                <p className='header-specialization'>We are an outsourcing team focused on Games, VR, 3D, SDK, and Unity packages.</p>
            </div>
            <div className="block-conteiner">
                <img src={deco1} alt="deco1" />
            </div>
            <div className="block-conteiner">
                <img src={deco2} alt="deco2" />
            </div>
            <div className="block-conteiner">
                <p>Stan's Assets were founded in 2013 with the story of Stan, who worked at night after his main job and developed the first Unity packages. Later other developers who have shared Stan’s passion joined the company and became our co-founders.</p>
                <p>Hundreds of thousands of developers are using them in their development. That’s how we’ve understood we can really save developer’s time and help them become more effective at their job.</p>
            </div>
            <div className="block-conteiner">
                <p>Thank for our plugins we became recognizible and started working with top worlknown companies like Moon Studios, Roomful and others.</p>
                <p>Now our team has more than 15 developers who create games, VR spaces, mobile applications for our clients.</p>
                <NavLink to={''}>If you share our values we'd love to see you as a part of our team!</NavLink>

                <div className="paragraph-group">
                    <h2>Our mission </h2>
                    <p>To create slick code that will be understandable to all developers who may work on a project after us and to make the developer's life easier with our plugins.</p>
                </div>
            </div>
            <div className="block-conteiner">
                <img src={deco3} alt="deco3" />
            </div>
        </section>
    );          
}

export default SpecializationComponent;