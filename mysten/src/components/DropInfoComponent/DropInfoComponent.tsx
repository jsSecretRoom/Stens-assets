import './DropInfoComponent.scss';
import { useState } from 'react';
import arrou from '../../assets/icon/arrou-Vector.svg';

interface propDropDovn {
    mainHeader: string,
    mainText: string
}

function DropInfoComponent({ droupDownItem }: { droupDownItem: propDropDovn }) {

    const [isShou, setIsShow] = useState(false);

    const shouMoreContent = () => {
        setIsShow(!isShou);
    }

    return ( 
        <div className='shou-txt'>
            <button onClick={shouMoreContent} className='main-text'>
                <img 
                    src={arrou} 
                    alt="arrou" 
                    style={{ transform: isShou ? 'rotate(0deg)' : 'rotate(180deg)' }}
                />
                <h2>{droupDownItem.mainHeader}</h2>
            </button>
            {isShou ?   
                <div className='shou-block'>
                    <p>{droupDownItem.mainText}</p>
                </div>
                : ''
            }
        </div>
    );
}

export default DropInfoComponent;