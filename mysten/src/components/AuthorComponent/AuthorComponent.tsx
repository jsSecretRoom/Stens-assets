import './AuthorComponent.scss';

import authorImg from '../../assets/author/Mask Group.svg';

import fecebukGray from '../../assets/aticle/facebucGray.svg';
import linkin from '../../assets/aticle/linkedin-gray.svg'

function AuthorComponent() {
    return ( 
        <section className='about-author-chapter'>
            <div className='author-titel'>
                <div className='author-header'>
                    <h2>Andrew Williams </h2> 
                    <div className='links'>
                        <img src={fecebukGray} alt="fecebukGray" />
                        <img src={linkin} alt="linkin" />
                    </div>
                </div>
                <div className='specialization'>
                    <p>SEO</p>
                </div>
            </div>
            <div className='author-paragraphs'>
                <div className='about-author-img'>
                    <img src={authorImg} alt="authorImg" />
                </div>
                <div className='author-main-information'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. </p>
                    <p>Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida. </p>
                    <p>Fusce consectetur vel urna ut venenatis. Etiam in mauris odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque viverra magna lorem, et placerat velit cursus quis. </p>
                </div>

            </div>
            <div className='rest-author-information'>
                    <p>Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.    Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet libero. In ac enim non lectus convallis feugiat. </p>
                    <p>Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit orci eu tristique gravida. </p>
                    <p>Fusce consectetur vel urna ut venenatis. Etiam in mauris odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque viverra magna lorem, et placerat velit cursus quis. </p>
                    <p>Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.    Maecenas venenatis molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat sed nec erat.</p>
                </div>
        </section>
    );
}

export default AuthorComponent;