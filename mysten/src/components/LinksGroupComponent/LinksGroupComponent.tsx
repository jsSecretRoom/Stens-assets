import './LinksGroupComponent.scss';
import { NavLink } from 'react-router-dom';


function LinksGroupComponent() {

    const pathnames = location.pathname;

    return ( 
        <div className='links-group'>
            <NavLink className={`link-info ${(pathnames === '/home') ? '' : 'deco'}`} to={'/home/Products'}>PRODUCTS</NavLink>
            <NavLink className={`link-info ${(pathnames === '/home') ? '' : 'deco'}`} to={'/home/Portfolio'}>PORTFOLIO</NavLink>
            <NavLink className={`link-info ${(pathnames === '/home') ? '' : 'deco'}`} to={'/home/Blog'}>BLOG</NavLink>
        </div>
    );
}

export default LinksGroupComponent;