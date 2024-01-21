import  './CurrentOpeningsComponent.scss';

import dropdownArrou from '../../assets//icon/arrou-Vector.svg';
import { useState } from 'react';

function CurrentOpeningsComponent({developNumber, initialstate} : {developNumber : string , initialstate: boolean}) {
    const [isDrop, setIsDrop] = useState(initialstate);

    const dropdownActivator = () => {
        setIsDrop((isDrop) => !isDrop)
    };

    return ( 
        <section className='dropdovn-block'>
            <button onClick={dropdownActivator} className='dropdovn-Head' style={isDrop ? { borderRadius: '20px 20px 0 0', backgroundColor: '#81ff76' } : {}}>
                <div className='drop-conteiner'>
                    <img src={dropdownArrou} alt="dropdownArrou" style={{ transform: isDrop ? 'rotate(0deg)' : 'rotate(180deg)' }}/>
                    <p>{developNumber}</p>
                </div>
                <button>Apply</button>
            </button>


            {isDrop ? 
                <div className='dropdovn-boady'>
                    <div className='group-chapter-liat'>
                        <h4>Requirements:</h4>
                        <ul>
                            <li>Experience as a Technical Artist;</li>
                            <li>Experience with C#/Unity programming;</li>
                            <li>Proficient in Autodesk Maya, 3DS Max, Photoshop, Substance, etс.;</li>
                            <li>Confident knowledge of Unity graphics pipeline;</li>
                            <li>Development 2D and 3D games;</li>
                            <li>Experience with mobile/web;</li>
                            <li>Experience with shader development in game engines;</li>
                            <li>Experience with Profiling/Debugging and Optimization by CPU, GPU, memory and build size.</li>
                        </ul>
                    </div>

                    <div className='group-chapter-liat'>
                        <h4>Preferences:</h4>
                        <ul>
                            <li>Experience with consoles NSwitch/Xbox/PS4;</li>
                            <li>Experience with shader languages HLSL/GLSL;</li>
                            <li>Experience with unit, behaviour, integration testing;</li>
                            <li>Experience with Jenkins/TeamCity;</li>
                            <li>Worked on/created large frameworks and projects.</li>
                        </ul>
                    </div>

                    <div className='group-chapter-liat'>
                        <h4>Responsibilities:</h4>
                        <ul>
                            <li>Work with artists and engineers to create and implement art and technical solutions;</li>
                            <li>Support artists and engineers in the use of the 3D art pipeline and tool-chains;</li>
                            <li>Provide hands-on support to artists and engineers in regard to asset performance and validation</li>
                            <li>Solve challenging technical issues in the 3D asset pipeline;</li>
                            <li>Collaborate with engineers and testers to diagnose and resolve in-game problems;</li>
                            <li> Collaborate with partner studios to share technology, workflows and best practices;</li>
                            <li>Able to work and communicate effectively in a fast-paced environment where goals and requirements may constantly be changing;</li>
                            <li>Committed to learning and sharing with the team to help achieve overall goals.</li>
                        </ul>
                    </div>
                </div>

                :
                ''
            }

            
        </section>
    );
}

export default CurrentOpeningsComponent;