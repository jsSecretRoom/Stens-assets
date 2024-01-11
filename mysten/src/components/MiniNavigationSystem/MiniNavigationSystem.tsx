import './MiniNavigationSystem.scss';

import {useLocation, NavLink} from 'react-router-dom';

import navArrov from '../../assets/icon/navigation-arrou.svg';

function MiniNavigationSystem() {
    
    const location = useLocation();
    const pathnames = location.pathname;
    const pathSegments = pathnames.split('/').filter(Boolean);
    const breadcrumbs = [];
    let currentPath = '';
    
    for (let i = 0; i < pathSegments.length; i++) {
       
        currentPath += `/${pathSegments[i]}`;
        const isLast = i === pathSegments.length - 1;
        const encodedSegment = decodeURIComponent(pathSegments[i]);

        if(currentPath == '/Home/Services'){
            currentPath = '/Home/Services/Mobile%20Application%20Development';
        }
        if(currentPath == '/Home/Technologies'){
            currentPath = '/Home/Technologies/Android%20Technologies';
        }
        if(currentPath == '/Home/About_us'){
            currentPath = '/Home/About_us/Specialization';
        }

        breadcrumbs.push(
            <li className={`breadcrumb-item ${isLast ? 'active' : ''}`} key={i}>
                {isLast ? (
                    <span className='end-root'>{encodedSegment}</span>
                ) : (
                    <span>
                        <NavLink to={currentPath}>
                            {encodedSegment}
                        </NavLink>
                        <img src={navArrov} alt="navArrov" />
                    </span>
                )}
            </li>
        );
    }

    return ( 
        <section className='navigation-sestem'>
            <ul className="breadcrumb">
                {breadcrumbs}
            </ul>
        </section>
    );
}

export default MiniNavigationSystem;