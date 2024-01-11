import './JoinTheTeamPage.scss';

import { Fragment } from "react";

import MiniNavigationSystem from "../../components/MiniNavigationSystem/MiniNavigationSystem";
import ParagraphComponent from "../../components/ParagraphComponent/ParagraphComponent";
import decoImg from '../../assets/decoration/services-deco4.svg'
import CurrentOpeningsComponent from '../../components/CurrentOpeningsComponent/CurrentOpeningsComponent';


function JoinTheTeamPage() {
    return ( 
        <Fragment>
            <MiniNavigationSystem/>
            <section className="team-hed">
                <div className="join-header"><h2>join the team</h2></div>
                <div className="join-img">
                    <img src={decoImg} alt="decoImg" />
                </div>
            </section>
            <ParagraphComponent/>
            <section className='openings-conteiner'>
                <h2>Current openings</h2>
                <CurrentOpeningsComponent developNumber={'Unity Developer 1'} initialstate={true}/>
                <CurrentOpeningsComponent developNumber={'Unity Developer 2'} initialstate={false}/>
                <CurrentOpeningsComponent developNumber={'Unity Developer 3'} initialstate={false}/>
                <CurrentOpeningsComponent developNumber={'Unity Developer 4'} initialstate={false}/>
            </section>
            

        </Fragment>
    );
}

export default JoinTheTeamPage;