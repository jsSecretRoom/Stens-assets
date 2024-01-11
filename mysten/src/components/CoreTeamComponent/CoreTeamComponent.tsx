import './CoreTeamComponent.scss';

import coreTeamImg from '../../assets/coreTeam/corteam.svg';
import { NavLink } from 'react-router-dom';


const CoreTeamArr = [
    {
        temImg: coreTeamImg,
        personName: 'Stan',
        personInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor .'
    },
    {
        temImg: coreTeamImg,
        personName: 'Stan',
        personInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor .'
    },
    {
        temImg: coreTeamImg,
        personName: 'pavel',
        personInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor .'
    },
    {
        temImg: coreTeamImg,
        personName: 'pavel',
        personInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor .'
    },
    {
        temImg: coreTeamImg,
        personName: 'alex',
        personInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor .'
    },
    {
        temImg: coreTeamImg,
        personName: 'konstantin',
        personInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor .'
    }
]

function CoreTeamComponent() {
    return ( 
        <section className='core-Team'>
            <h2>core team</h2>
            <div className='about-team-conteiner'>
                {CoreTeamArr.map((item, index) => (
                    <div className='user-card' key={index}>
                        <div className='fteam-foro'>
                            <img src={item.temImg} alt="coreTeamImg" />
                        </div>
                        <div className='person-information'>
                            <NavLink to={''}>{item.personName}</NavLink>
                            <p>{item.personInformation}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
export default CoreTeamComponent;