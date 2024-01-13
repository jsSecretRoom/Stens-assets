import './MainBurgerButton.scss';

import Mainico from '../../assets/icon/main-burger-img.svg';

function MainBurgerButton() {
    return ( 
        <button className='main-button'>
            <img src={Mainico} alt="Mainico" />
        </button>
    );
}

export default MainBurgerButton;