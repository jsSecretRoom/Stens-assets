import './ServicesComponent.scss';
import articleImg1 from './../../assets/aticle/ilustration1.png'
import articleImg2 from './../../assets/aticle/Illustration2.png'
import articleImg3 from './../../assets/aticle/Illustration 3.png'
import articleImg4 from './../../assets/aticle/Illustration 4.png'
import { NavLink } from 'react-router-dom';
function ServicesComponent() {
    return ( 
        <section className='services'>
            <NavLink to={''}>Services</NavLink>
            <div className='articcle-conteiner'>
                
                <div className='article-group'>
                    <div className='articcle'>
                        <NavLink to={''}>GAME DEVELOPMENT</NavLink>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis.
                            Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien.</p>
                    </div>
                    <div className='articcle-img'>
                        <img src={articleImg1} alt="articcleImg1"/>
                    </div>
                </div>


                <div className='article-group'>
                    <div className='articcle-img'> <img src={articleImg2} alt="articcleImg2" /></div>
                    <div className='articcle'>
                        <NavLink to={''}>SDK Development</NavLink>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis.
                            Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien.</p>
                    </div>
                </div>


                <div className='article-group'>
                    <div className='articcle'>
                        <NavLink to={''}>3D Modeling services</NavLink>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis.
                            Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien.</p>
                    </div>
                    <div className='articcle-img'> <img src={articleImg3} alt="articcleImg3" /></div>
                </div>

                
                <div className='article-group'>
                    <div className='articcle-img'> <img src={articleImg4} alt="articcleImg4" /></div>
                    <div className='articcle'>
                        <NavLink to={''}>VR App Development</NavLink>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis.
                            Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien.</p>
                    </div>
                </div>

                
            </div>
        </section>
    );
}

export default ServicesComponent;