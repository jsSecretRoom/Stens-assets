import './ArticleCreatorComponent.scss';

import { NavLink } from 'react-router-dom';

import autorimg from '../../../assets/aticle/autorimg.svg';
import fasebook from '../../../assets/aticle/facebucGray.svg';
import linkedin from '../../../assets/aticle/linkedin-gray.svg';

function ArticleCreatorComponent() {
    return ( 
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
    );
}

export default ArticleCreatorComponent;