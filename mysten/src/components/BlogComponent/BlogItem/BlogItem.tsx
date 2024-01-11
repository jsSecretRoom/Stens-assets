import './BlogItem.scss';
import { Fragment } from "react";
import { NavLink } from 'react-router-dom';

import star from '../../../assets/icon/Star 5.svg';
import postImg from '../../../assets/blog-img/Frame 5.svg';
import autorImg from '../../../assets/blog-img/autor.svg';
import glazImg from '../../../assets/blog-img/glaz.svg';
import timeImg from '../../../assets/blog-img/time.svg';

function BlogItem({ title, content, author, date, views, article }) {
    return ( 
        <Fragment>
            <NavLink to={`/home/Blog/${article}`} className='item'>
                <div className='pudlication-img'>
                    <img src={postImg} alt="postImg" />
                </div>
                <div className='item-blog'>
                    <div className='fiches'>
                        <div className='star-count'>
                            <button className="star" value={1}><img src={star} alt="star"/></button>
                            <button className="star" value={2}><img src={star} alt="star"/></button>
                            <button className="star" value={3}><img src={star} alt="star"/></button>
                            <button className="star" value={4}><img src={star} alt="star"/></button>
                            <button className="star" value={5}><img src={star} alt="star"/></button>
                        </div>
                        <div className='read-time'>
                            <img src={timeImg} alt="timeImg" />
                            <p>6 min read</p>
                        </div>
                        <div className='views'>
                            <img src={glazImg} alt="glazImg" />
                            <p>{views} views</p>
                        </div>
                    </div>

                    <div className='title-blog-chapter'>
                        <h3>{title}</h3>
                        <p>{content}</p>
                    </div>
                    <div className='autor-information-conteiner'>
                        <div className='autor-info'>
                            <img src={autorImg} alt="" />
                            <p>{author}</p>
                        </div>
                        <div className='publication-date'>
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </Fragment>
    );
}

export default BlogItem;