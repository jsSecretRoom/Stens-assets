import './DropdownComponent.scss';

import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import droupdovnArrou from '../../assets/icon/drop-arrou.svg';

function DropdownComponent({ dropdownName, serviceNames }: { dropdownName: string; serviceNames: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const pathnames = location.pathname;

  const dropdownRef = useRef<HTMLDivElement | null>(null); // Specify the type for useRef

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close the dropdown if the click is outside of the dropdown component
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Attach the event listener to the document body
    document.body.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };

  }, [dropdownRef]); // Include dropdownRef in the dependency array to avoid potential issues

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <p onClick={toggleDropdown} style={{ color: pathnames === '/home' ? 'white' : 'blue' }}>
        {dropdownName.toUpperCase()}
        <img
          src={droupdovnArrou}
          alt="droupdovnArrou"
          style={{
            filter: pathnames === '/home' ? 'none' : 'invert(1)',
            transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        />
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