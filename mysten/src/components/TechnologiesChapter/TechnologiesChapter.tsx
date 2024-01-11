import './TechnologiesChapter.scss';
import { NavLink } from 'react-router-dom';

import androidico from '../../assets/icon/android.svg';
import apleico from '../../assets/icon/aple.svg';
import unityico from '../../assets/icon/unity.svg';

function TechnologiesChapter() {
    return ( 
        <section className='texnologies'>
            <NavLink to={''}>Technologies</NavLink>
            <p><span><NavLink to={''}>Stan’s Assets</NavLink> </span>is a team of developers that are committed to developing
            <br />
             high quality and engaging entertainment software</p>
            
            <div className='platforms-devlopeng'>
                <button className='androidico'><img src={androidico} alt="androidico" /></button>
                <button className='apleico'><img src={apleico} alt="apleico" /></button>
                <button className='unityico'><img src={unityico} alt="unityico" /></button>
            </div>
            <p>Our engineers develop applications for the most popular platforms.</p>
        </section>
    );
}

export default TechnologiesChapter;