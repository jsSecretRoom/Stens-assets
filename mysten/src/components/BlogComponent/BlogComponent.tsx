import './BlogComponent.scss';

import { NavLink } from 'react-router-dom';

import decoBacgroundBlog from '../../assets/decoration/deco-bacground-blog.svg';
import BlogItem from './BlogItem/BlogItem';

const blogItems = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Lorem ipsum dolor sit amet ${index + 1}`,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eleifend dolor vel cursus...',
    author: 'Andrew Williams',
    date: 'February 24, 2021',
    views: `${Math.floor(Math.random() * 1000)} views`,
    article: `StensArticle`
}));

function BlogComponent() {
    return (  
        <section  className='stens-blog'>
            <NavLink to={''}>Blog</NavLink>
            <div className='blog-items'>
                {blogItems.map((item) => (
                    <BlogItem key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
}

export default BlogComponent;