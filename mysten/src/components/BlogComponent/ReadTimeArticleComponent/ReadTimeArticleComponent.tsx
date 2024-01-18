import './ReadTimeArticleComponent.scss';


import timeImg from '../../../assets/blog-img/time.svg';

function ReadTimeArticleComponent() {
    
    return ( 
        <div className='read-time'>
            <img src={timeImg} alt="timeImg" />
            <p>6 min read</p>
        </div>
    );
}

export default ReadTimeArticleComponent;