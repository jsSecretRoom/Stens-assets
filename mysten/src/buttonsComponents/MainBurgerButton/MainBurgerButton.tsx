import './MainBurgerButton.scss';
import { useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { GetMainPortallState } from '../../redux/Actions/BooleanActions';
import { RootState } from '../../redux/RootReducer';

function MainBurgerButton() {

    const dispatch = useDispatch();
    const location = useLocation();
    
    const pathnames = location.pathname;
    

    const mainPortallState = useSelector((state: RootState ) => state.getboolean.closeOpenMain);

    return ( 
        <button onClick={() => dispatch(GetMainPortallState(!mainPortallState))} className='main-button'>
            
            <div className={`top-plank ${(pathnames === '/home') ? '' : 'deco'}`}></div>
            <div className={`midle-plank ${(pathnames === '/home') ? '' : 'deco'}`}></div>
            <div className={`bottom-plank ${(pathnames === '/home') ? '' : 'deco'}`}></div>
            
        </button>
    );
}

export default MainBurgerButton;