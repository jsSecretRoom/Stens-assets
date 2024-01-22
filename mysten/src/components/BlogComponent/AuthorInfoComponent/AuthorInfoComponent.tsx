import './AuthorInfoComponent.scss';

function AuthorInfoComponent({autorImg, author}: {autorImg: string, author: string}) {
    return ( 
        <div className='autor-info'>
            <img src={autorImg} alt="" />
            <p>{author}</p>
        </div>
    );
}

export default AuthorInfoComponent;