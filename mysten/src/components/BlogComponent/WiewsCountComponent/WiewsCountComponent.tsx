import './WiewsCountComponent.scss';

import glazImg from '../../../assets/blog-img/glaz.svg';

function WiewsCountComponent() {
    return ( 
        <div className='views'>
            <img src={glazImg} alt="glazImg" />
            <p>{467} views</p>
        </div>
    );
}

export default WiewsCountComponent;