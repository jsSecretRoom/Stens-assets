import './AuthorInfoComponent.scss';

function AuthorInfoComponent({autorImg, author}) {
    return ( 
        <div className='autor-info'>
            <img src={autorImg} alt="" />
            <p>{author}</p>
        </div>
    );
}

export default AuthorInfoComponent;