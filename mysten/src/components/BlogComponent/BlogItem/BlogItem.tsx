import './BlogItem.scss';

import { NavLink } from 'react-router-dom';

import postImg from '../../../assets/blog-img/Frame 5.svg';
import autorImg from '../../../assets/blog-img/autor.svg';

import GradeArticleComponent from '../GradeArticleComponent/GradeArticleComponent';
import ReadTimeArticleComponent from '../ReadTimeArticleComponent/ReadTimeArticleComponent';
import WiewsCountComponent from '../WiewsCountComponent/WiewsCountComponent';
import AuthorInfoComponent from '../AuthorInfoComponent/AuthorInfoComponent';
import ArticleDateComponent from '../ArticleDateComponent/ArticleDateComponent';

function BlogItem({ title, content, author, article }) {
    return ( 

        <NavLink to={`/home/Blog/${article}`} className='item'>
            <div className='pudlication-img'>
                <img src={postImg} alt="postImg" />
            </div>
            <div className='item-blog'>
                <div className='fiches'>

                    <GradeArticleComponent/>

                    <div className='rest-feches'>
                        <ReadTimeArticleComponent/>
                        <WiewsCountComponent/>

                    </div>
                </div>

                <div className='title-blog-chapter'>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>

                <div className='autor-information-conteiner'>
                    <AuthorInfoComponent autorImg={autorImg} author={author}/>
                    <ArticleDateComponent/>
                </div>
            </div>
        </NavLink>
       
    );
}

export default BlogItem;