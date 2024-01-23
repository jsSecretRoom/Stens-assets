import './StarGradeConteiner.scss';

import star from '../../assets/icon/rightStar.svg';
import { useEffect, useState } from 'react';


function StarGradeConteiner({}) {
    
    const [votersCount, setVotersCount] = useState<number>(0);
    const [totalValue, setTotalValue] = useState<number>(0);
 

    const [totallGradeArray, setTotallGradeArray] = useState<number[]>([]);
    
    const [hoverWidth, setHoverWidth] = useState<number>(0);
    const [totallGradeWidth, setTotallGradeWidth] = useState<number>(0);
  
    const gradeDocument = (value: number, event: any): void => {
        event.preventDefault()
        setVotersCount((votersCount) => votersCount + 1);
        setTotallGradeArray([...totallGradeArray, value]);
    }
  
    useEffect(() => {
      if (totallGradeArray && totallGradeArray.length > 0) {
        const total = totallGradeArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const totalgrade = total / totallGradeArray.length;
  
        const roundedTotalGrade: string = totalgrade.toFixed(1);
  
        const width: number = totalgrade * 20;
        setTotallGradeWidth(width);
        setTotalValue(Number(roundedTotalGrade));
      }
    }, [totallGradeArray]);

    const handleStarHover = (value: number) => {
        // Обработка наведения на звезду 
        // Каждая звезда увеличивает ширину на 20
        const width = value * 20; 
        setHoverWidth(width);
      };

    return ( 
        <div className='clutch-fica'>
            <div className='grade'><p>{totalValue}</p></div>
            <div className="star-container">
                <div className='star-count'>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <button
                            key={value}
                            className="star"
                            value={value}
                            onClick={(e) => gradeDocument(value, e)}
                            onMouseEnter={() => handleStarHover(value)}
                            onMouseLeave={() => setHoverWidth(0)}
                        >
                            <img src={star} alt="star" />
                        </button>
                    ))}
                </div>
                <div className='default-line'></div>
                <div className='Like-line' style={{ width: totallGradeWidth + '%' }}></div>
                <div className='user-hover'style={{ width: hoverWidth + '%' }}></div>
            </div>
            <div className='number-of-voters'><p>{votersCount} reviews</p></div>
        </div>
        
    );
}

export default StarGradeConteiner;