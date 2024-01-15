import './TitleComponent.scss';

import {useLocation} from 'react-router-dom';
import { useState } from 'react';

import deco1 from '../../assets/decoration/services-deco1.svg';
import deco2 from '../../assets/decoration/services-deco2.svg';
import deco3 from '../../assets/decoration/services-deco3.svg';
import deco4 from '../../assets/decoration/services-deco4.svg';
import deco5 from '../../assets/decoration/services-deco5.svg';
import deco6 from '../../assets/decoration/services-deco6.svg';
import deco7 from '../../assets/decoration/services-deco3.svg';

import androidImg from '../../assets/technologies-img/android.svg';
import iosImg from '../../assets/technologies-img/ios-img.svg';
import unityImg from '../../assets/technologies-img/unity-img.svg';

import { useEffect } from 'react';

const chouseImg = {
    '/home/Services/Mobile%20Application%20Development' : deco1,
    '/home/Services/Game%20Development%20Outsourcing' : deco2,
    '/home/Services/VR%20App%20Development' : deco3,
    '/home/Services/Dedicated%20Developers' : deco4,
    '/home/Services/SDK%20Development' : deco5,
    '/home/Services/3D%20Modeling%20Services' : deco6,
    '/home/Services/AR%20App%20Development' : deco7,
    '/home/Technologies/Android%20Technologies': androidImg,
    '/home/Technologies/iOS%20Technologies': iosImg,
    '/home/Technologies/Unity%20Technologies': unityImg,

}

 
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
            <div className='right'><img src={chouseImg[pathnames] } alt="deco" /></div>
        </section>
    );
}

export default TitleComponent;