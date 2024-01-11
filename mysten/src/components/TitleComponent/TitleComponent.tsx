import './TitleComponent.scss';

import {useLocation} from 'react-router-dom';
import { useState } from 'react';

import deco1 from '../../assets/decoration/services-deco1.svg';
import deco2 from '../../assets/decoration/services-deco2.svg';
import deco3 from '../../assets/decoration/services-deco3.svg';
import deco4 from '../../assets/decoration/services-deco4.svg';
import deco5 from '../../assets/decoration/services-deco5.svg';
import deco6 from '../../assets/decoration/services-deco6.svg';
import { useEffect } from 'react';


 
function TitleComponent() {
    const [morDesk, setMoDesk] = useState(false);
    const location = useLocation();
    const pathnames = location.pathname;
    const pathSegments = pathnames.split('/').filter(Boolean);
    const encodedSegment = decodeURIComponent(pathSegments[pathSegments.length -1]);

    useEffect(() => {
        if(encodedSegment == 'Products' || encodedSegment == 'Portfolio' ){
            setMoDesk(true)
        }
    },[encodedSegment]);

    return ( 
        <section className='title'>
            <div className='left'><p>{morDesk ? 'Stan assets ' : ''} {encodedSegment}</p></div>
            <div className='right'><img src={deco1} alt="deco" /></div>
        </section>
    );
}

export default TitleComponent;