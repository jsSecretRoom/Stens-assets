import { NavLink } from 'react-router-dom';
import './StenProductsComponent.scss';

import gitico from '../../assets/icon/git-logo.svg';
import unityico from '../../assets/icon/unity.svg';

import stensAsset1 from '../../assets/stens-asset/Android Native Pro 420-280 1.svg';
import stensAsset2 from '../../assets/stens-asset/IOS Native Pro 420-280 1.svg';
import stensAsset3 from '../../assets/stens-asset/Ultimate Mobile Pro   420-280 1.svg';
import stensAsset4 from '../../assets/stens-asset/image 28.svg';
import stensAsset5 from '../../assets/stens-asset/image 60.svg';
import stensAsset6 from '../../assets/stens-asset/image 61.svg';
import stensAsset7 from '../../assets/stens-asset/image 62.svg';
import stensAsset8 from '../../assets/stens-asset/image 63.svg';
import stensAsset9 from '../../assets/stens-asset/image 64.svg';


const stensProductCard = [
    {
        productimg: stensAsset1,
        productTitle: 'Ultimate mobile pro',
        productParagrapf: 'This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.'
    },
    {
        productimg: stensAsset2,
        productTitle: 'android native pro',
        productParagrapf: 'This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.'
    },
    {
        productimg: stensAsset3,
        productTitle: 'ios native pro',
        productParagrapf: 'This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.'
    },
    {
        productimg: stensAsset4,
        productTitle: 'after effects importer',
        productParagrapf: 'This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.'
    },
    {
        productimg: stensAsset5,
        productTitle: 'google doc localization',
        productParagrapf: 'This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.'
    },
    {
        productimg: stensAsset6,
        productTitle: 'google tag manager',
        productParagrapf: 'This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.'
    },
    {
        productimg: stensAsset7,
        productTitle: 'texture packer pro',
        productParagrapf: 'This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.'
    },
    {
        productimg: stensAsset8,
        productTitle: 'amazon native',
        productParagrapf: 'This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.'
    },
    {
        productimg: stensAsset9,
        productTitle: 'google analytics sdk',
        productParagrapf: 'This plugin provides easy and flexible functionality of iOS native functions which are not natively available from Unity.'
    },
];

function StenProductsComponent() { 
    return ( 
        <section className='sten-products'>
            {stensProductCard.map((item, index) => (
                <div className='productCard' key={index}>
                    <div className='img-block'>
                        <img src={item.productimg} alt="productimg" />
                        <div className='shou-links'>
                            <div className='links'>
                                <NavLink to={''}><img src={gitico} alt="gitico" /></NavLink>
                                <NavLink to={''}><img src={unityico} alt="unityico" /></NavLink>  
                            </div>
                        </div>
                    </div>
                    <div className='information'>
                        <NavLink to={''}>{item.productTitle}</NavLink>
                        <p>{item.productParagrapf}</p>
                    </div>
                </div>
            ))}
            
        </section>
    );
}

export default StenProductsComponent;