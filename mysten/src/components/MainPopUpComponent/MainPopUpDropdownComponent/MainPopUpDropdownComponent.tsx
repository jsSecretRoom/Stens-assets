import './MainPopUpDropdownComponent.scss';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { GetMainPortallState } from '../../../redux/Actions/BooleanActions';

import droupdovnArrou from '../../../assets/icon/drop-arrou.svg';

function MainPopUpDropdownComponent({dropdownName, serviceNames}: {dropdownName: string, serviceNames: string[]}) {
    const dispatch = useDispatch();
    const windowWidth = window.innerWidth;

    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {

        if(windowWidth <= 768){
            setIsOpen(false);
        }

    },[windowWidth]);

    const closePopup = ( ) => {
        if(windowWidth <= 450){
            dispatch(GetMainPortallState(false));
        }
    }


    return ( 
        <section className='main-dropdown-content'>
            <p onClick={toggleDropdown} className='dropdown-name'>
                <img
                    src={droupdovnArrou}
                    alt="droupdovnArrou"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
                {dropdownName.toUpperCase()}
                
            </p>
            {isOpen && (
                <div className='dropdown-content'>
                    {serviceNames.map((item, index) => (
                        <NavLink key={index} to={`/home/${dropdownName}/${item}`} onClick={() => closePopup()}>
                            {item}
                        </NavLink>
                    ))}
                </div>
            )}
        </section>
    );
}

export default MainPopUpDropdownComponent;