import './Achievements.scss';
import handsImg from '../../assets/cardAchiveDecoration/heands.svg';
import rocketImg from '../../assets/cardAchiveDecoration/rocket.svg';
import phoneImg from '../../assets/cardAchiveDecoration/phone.png';
import boxImg from '../../assets/cardAchiveDecoration/box.svg';

function Achievements() {
    return ( 
        <section className="achivements">
            <h2>Achievements</h2>
            <div className="achivements-card-conteiner">
                <div className="achivements-card">
                    <img src={handsImg} alt="handsImg" />
                    <div className="achivements-text">
                        <p>50+ successfully launched projects on the market.</p>
                    </div>
                </div>
                <div className="achivements-card">
                    <img src={rocketImg} alt="rocketImg" />
                    <div className="achivements-text">
                        <p>Asset store publisher since 2013</p>
                    </div>
                </div>
                <div className="achivements-card">
                    <img src={phoneImg} alt="phoneImg" />
                    <div className="achivements-text">
                        <p>50+ successfully launched projects on the the market.</p>
                    </div>
                </div>
                <div className="achivements-card">
                    <img src={boxImg} alt="boxImg" />
                    <div className="achivements-text">
                        <p>Our products (packages) used by 100k+ devs in 5k+ commercial projects worldwide</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Achievements;