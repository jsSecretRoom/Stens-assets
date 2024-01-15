import './DropdownComponent.scss';


import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

import droupdovnArrou from '../../assets/icon/drop-arrou.svg';

function DropdownComponent({dropdownName, serviceNames} : {dropdownName: string, serviceNames: string[]}) {
  
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const pathnames = location.pathname;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return ( 
    <div className="dropdown">
      <p onClick={toggleDropdown} style={{ color: (pathnames === '/home') ? 'white' : 'blue' }}>
        {dropdownName.toUpperCase()} 
        <img src={droupdovnArrou} alt="droupdovnArrou" /> 
      </p>
      {isOpen && (
        <div className="dropdown-content">
          {serviceNames.map((item, id) => (
            <NavLink key={id} to={`/home/${dropdownName}/${item}`} onClick={() => setIsOpen(false)}>
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownComponent;