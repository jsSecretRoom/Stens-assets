import './ClutchComponent.scss';

import clutchIo from '../../assets/icon/Clucch.svg';

import StarGradeConteiner from '../StarGradeConteiner/StarGradeConteiner';

function ClutchComponent() {

    return ( 
        <section className='clutch-conteiner'>
            <div className='clutch'>
                <div className='clutch-logo'>
                    <img src={clutchIo} alt="clutchIo" />
                </div>
                
                <StarGradeConteiner/>

                <div className='reviews'>
                    <button>Check out reviews</button>
                </div>
            </div>
        </section>
        
    );
}

export default ClutchComponent;