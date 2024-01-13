import './ClutchComponent.scss';
import { useState } from 'react';
import clutchIo from '../../assets/icon/Clucch.svg';
import star from '../../assets/icon/Star 5.svg';

function ClutchComponent() {
    const [votersCount, setVotersCount] = useState(0);
    const [grade, setGrade] = useState(0);
    return ( 
        <section className='clutch-conteiner'>
            <div className='clutch'>
                <div className='clutch-logo'>
                    <img src={clutchIo} alt="clutchIo" />
                </div>
                <div className='clutch-fica'>
                    <div className='grade'><p>{grade}</p></div>
                    <div className="star-container">
                        <div className='star-count'>
                            <button className="star" value={1}><img src={star} alt="star"/></button>
                            <button className="star" value={2}><img src={star} alt="star"/></button>
                            <button className="star" value={3}><img src={star} alt="star"/></button>
                            <button className="star" value={4}><img src={star} alt="star"/></button>
                            <button className="star" value={5}><img src={star} alt="star"/></button>
                        </div>
                        <div className='Like-line'></div>
                    </div>
                    <div className='number-of-voters'><p>{votersCount} reviews</p></div>
                </div>
                <div className='reviews'>
                    <button>Check out reviews</button>
                </div>
            </div>
        </section>
        
    );
}

export default ClutchComponent;