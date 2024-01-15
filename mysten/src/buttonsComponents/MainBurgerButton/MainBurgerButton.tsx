import './MainBurgerButton.scss';
import { useLocation } from 'react-router-dom';
// import Mainico from '../../assets/icon/main-burger-img.svg';

function MainBurgerButton() {
    const location = useLocation();
    const pathnames = location.pathname;

    return ( 
        <button className='main-button'>
            
            <div className={`top-plank ${(pathnames === '/home') ? '' : 'deco'}`}></div>
            <div className={`midle-plank ${(pathnames === '/home') ? '' : 'deco'}`}></div>
            <div className={`bottom-plank ${(pathnames === '/home') ? '' : 'deco'}`}></div>
            
        </button>
    );
}

export default MainBurgerButton;