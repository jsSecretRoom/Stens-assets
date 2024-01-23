import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import './LinksGroupComponent.scss';
import { GetMainPortallState } from '../../redux/Actions/BooleanActions';
import { RootState } from '../../redux/RootReducer';

function LinksGroupComponent() {
    const dispatch = useDispatch();
    const windowWidth = window.innerWidth;
    const closeOppenPopUp = useSelector((state: RootState) => state.getboolean.closeOpenMain);
    const location = useLocation(); // Используйте useLocation для получения текущего пути

    const getManu = () => {
        if (windowWidth < 1000) {
            dispatch(GetMainPortallState(!closeOppenPopUp));
        }
    }

    return (
        <div className='links-group'>
            <NavLink to={'/home/Products'} onClick={getManu} className={`link-info ${(location.pathname === '/home') ? '' : 'deco'}`}>PRODUCTS</NavLink>
            <NavLink to={'/home/Portfolio'} onClick={getManu} className={`link-info ${(location.pathname === '/home') ? '' : 'deco'}`}>PORTFOLIO</NavLink>
            <NavLink to={'/home/Blog'} onClick={getManu} className={`link-info ${(location.pathname === '/home') ? '' : 'deco'}`}>BLOG</NavLink>
        </div>
    );
}

export default LinksGroupComponent;