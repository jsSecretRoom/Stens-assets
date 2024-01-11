import { NavLink } from 'react-router-dom';
import './ArticleComponent.scss';

import EvaluateArticle from '../EvaluateArticle/EvaluateArticle';

import autorimg from '../../assets/aticle/autorimg.svg';
import fasebook from '../../assets/aticle/facebucGray.svg';
import linkedin from '../../assets/aticle/linkedin-gray.svg';
import share from '../../assets/icon/share 1.svg';
import articleimg from '../../assets/aticle/Frame 7.svg';




function ArticleComponent() {
    return ( 
        <section className='autor-article'>
            <h2>article 1</h2>
            <div className='feaces-conteiner'>
                <div>{/* feches blockk!!!! component wont be hear */}</div>
                <div className='share'><img src={share} alt="share" /></div>
            </div>
            
            <div className='article-img'>
                <img src={articleimg} alt="articleimg" />
            </div>
            <div className='articl-feaces-footer'></div>
            
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
            <div className='creator'>
                <NavLink to={'/home/Blog/Article/Author'}>about the author</NavLink>
                <div className='about-creator'>
                    <div className='creator-img'>
                        <img src={autorimg} alt="autorimg" />
                    </div>
                    <div className='creator-information'>
                        <div className='creator-header-conteiner'>
                            <div className='creator-header'>
                                <p>Andrew Williams</p>
                                <div className='lincs'>
                                    <NavLink to={''}><img src={fasebook} alt="fasebook" /></NavLink>
                                    <NavLink to={''}><img src={linkedin} alt="linkedin" /></NavLink>
                                </div>
                            </div>
                            <div className='specialization'>
                                <p>SEO</p>
                            </div>
                        </div>

                        <div className='creator-title'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArticleComponent;