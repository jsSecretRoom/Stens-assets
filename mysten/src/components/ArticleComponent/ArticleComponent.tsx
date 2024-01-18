
import './ArticleComponent.scss';

import EvaluateArticle from '../EvaluateArticle/EvaluateArticle';


import share from '../../assets/icon/share 1.svg';
import articleimg from '../../assets/aticle/Frame 7.svg';
import GradeArticleComponent from '../BlogComponent/GradeArticleComponent/GradeArticleComponent';
import ReadTimeArticleComponent from '../BlogComponent/ReadTimeArticleComponent/ReadTimeArticleComponent';
import WiewsCountComponent from '../BlogComponent/WiewsCountComponent/WiewsCountComponent';
import AuthorInfoComponent from '../BlogComponent/AuthorInfoComponent/AuthorInfoComponent';
import ArticleDateComponent from '../BlogComponent/ArticleDateComponent/ArticleDateComponent';
import ArticleCreatorComponent from '../BlogComponent/ArticleCreatorComponent/ArticleCreatorComponent';



function ArticleComponent() {

    const autorimg2 = '../../assets/aticle/autorimg.svg'
    const author = 'Andrew Williams';

    return ( 
        <section className='autor-article'>
            <h2>article 1</h2>
            <div className='feaces-conteiner'>
                <div className='article-fiches'>

                    <GradeArticleComponent/>
                    <div className='group-conteiner'>
                        <div className='rest-group'>
                            <ReadTimeArticleComponent/>
                            <WiewsCountComponent/>
                        </div>


                        <button className='share'>
                            <img src={share} alt="share" />
                        </button>
                    </div>

                    
                </div>

            </div>
            
            <div className='article-img'>
                <img src={articleimg} alt="articleimg" />
            </div>
            <div className='articl-feaces-footer'>
                <AuthorInfoComponent autorImg={autorimg2} author={author}/>
                <ArticleDateComponent/>
            </div>
            
            <div className='article-paragraps'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. </p>
                <p>Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida. </p>
                <p>Fusce consectetur vel urna ut venenatis. Etiam in mauris odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque viverra magna lorem, et placerat velit cursus quis. </p>
                <p>Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.    Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. </p>
                <p>Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida. </p>
                <p>Fusce consectetur vel urna ut venenatis. Etiam in mauris odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque viverra magna lorem, et placerat velit cursus quis. </p>
                <p>Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.    Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.</p>
            </div>

            <EvaluateArticle/>
            <ArticleCreatorComponent/>
            
        </section>
    );
}

export default ArticleComponent;