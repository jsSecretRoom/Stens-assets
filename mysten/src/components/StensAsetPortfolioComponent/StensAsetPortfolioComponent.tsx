import './StensAsetPortfolioComponent.scss';

import { NavLink } from "react-router-dom";

import portfoliofoto1 from '../../assets/portfolio-img/Mask Group-1.svg';
import portfoliofoto2 from '../../assets/portfolio-img/Mask Group-2.svg';
import portfoliofoto3 from '../../assets/portfolio-img/Mask Group.svg';


function StensAsetPortfolioComponent() {
    return ( 
        <section className="portfolio-component">
            <div className="parafraph-chapter">
                <div className="chapter-img">
                    <img className='left-img' src={portfoliofoto1} alt="portfoliofoto1" />
                </div>
                <div className="paragraph-content">
                    <NavLink to={''}>Ori and the will of the wisps</NavLink>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum.</p>
                </div>
            </div>
            <div className="parafraph-chapter">
                <div className="paragraph-content">
                    <NavLink to={''}>tin hearts</NavLink>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum.</p>
                </div>
                <div className="chapter-img">
                    <img className='rightt-img' src={portfoliofoto2} alt="portfoliofoto2" />
                </div>
            </div>
            <div className="parafraph-chapter">
                <div className="chapter-img">
                    <img className='left-img' src={portfoliofoto3} alt="portfoliofoto3" />
                </div>
                <div className="paragraph-content">
                    <NavLink to={''}>stickman trials</NavLink>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum.</p>
                </div>
            </div>
            <div className="parafraph-chapter">
                <div className="paragraph-content">
                    <NavLink to={''}>tin hearts</NavLink>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum.</p>
                </div>
                <div className="chapter-img">
                    <img className='rightt-img' src={portfoliofoto2} alt="portfoliofoto2" />
                </div>
            </div>
        </section>
    );
}

export default StensAsetPortfolioComponent;