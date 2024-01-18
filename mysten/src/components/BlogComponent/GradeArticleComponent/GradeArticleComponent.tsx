import  './GradeArticleComponent.scss';

import star from '../../../assets/icon/Star 5.svg';


function GradeArticleComponent() {
    
    return ( 
        <div className='star-count'>
            <button className="star" value={1}><img src={star} alt="star"/></button>
            <button className="star" value={2}><img src={star} alt="star"/></button>
            <button className="star" value={3}><img src={star} alt="star"/></button>
            <button className="star" value={4}><img src={star} alt="star"/></button>
            <button className="star" value={5}><img src={star} alt="star"/></button>
        </div>
    );
}

export default GradeArticleComponent;