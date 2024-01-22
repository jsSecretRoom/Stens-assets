import './JoinUsPopUpComponent.scss';

import ReactDOM from 'react-dom';

import { useDispatch, useSelector } from 'react-redux';
import { JoinUsPortallState } from '../../redux/Actions/BooleanActions';
import { RootState } from '../../redux/RootReducer'; 


const JoinUsPortalWrapper = ({ children, container } : {children: any, container: any}) => {
    return ReactDOM.createPortal(children, container);
};

function JoinUsPopUpComponent() {
    const dispatch = useDispatch();
    const joinUsPortallState = useSelector((state: RootState ) => state.getboolean.closeOpenJoinUs);
    const contactsPortalContainer = document.getElementById('joinUs-root');

    const togglePortal = () => {
        dispatch(JoinUsPortallState(!joinUsPortallState));
    };

    return ( 
        <JoinUsPortalWrapper container={contactsPortalContainer}>
            <section className='joinUsPortal'>
                <div className={`joinUs-portal-conteiner ${joinUsPortallState ? 'activ' : ''}`}>
                    <div className="joinUs-portal-content">
                        <div className='joinUs-close-conteiner'>
                            <p onClick={togglePortal}>Close</p>
                        </div>
                        <div className='join-head'>
                            <h5>join the team</h5>
                            <p>{}</p>
                        </div>
                        <div className='join-body'>
                            <form className='joinUs-form' action="">
                                <input type="text" name="" id="" placeholder='Full Name'/>
                                <input type="email" name="" id="" placeholder='Email'/>
                                <input type="url" name="" id="" placeholder='Portfolio link'/>
                                <div className='attach-conteiner'>
                                    <input type="text" name="" id="" placeholder='Please Attach your CV File...'/>
                                    <button className='sellect-file'>Select file</button>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Message'>

                                </textarea>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </JoinUsPortalWrapper>
    );
}


export default JoinUsPopUpComponent;