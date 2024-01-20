import './TechnologiesChapter.scss';
import { NavLink } from 'react-router-dom';

import androidico from '../../assets/icon/android.svg';
import apleico from '../../assets/icon/aple.svg';
import unityico from '../../assets/icon/unity.svg';

function TechnologiesChapter() {
    return ( 
        <section className='texnologies'>
            <NavLink to={'/home/Technologies/Android%20Technologies'}>Technologies</NavLink>
            <p><span><NavLink to={'/home/Products'}>Stan’s Assets</NavLink> </span>is a team of developers that are committed to developing
            <br />
             high quality and engaging entertainment software</p>
            
            <div className='platforms-devlopeng'>
                <NavLink to={'/home/Technologies/Android%20Technologies'} className='androidico'><img src={androidico} alt="androidico" /></NavLink>
                <NavLink to={'/home/Technologies/iOS%20Technologies'} className='apleico'><img src={apleico} alt="apleico" /></NavLink>
                <NavLink to={'/home/Technologies/Unity%20Technologies'} className='unityico'><img src={unityico} alt="unityico" /></NavLink>
            </div>
            <p>Our engineers develop applications for the most popular platforms.</p>
        </section>
    );
}

export default TechnologiesChapter;