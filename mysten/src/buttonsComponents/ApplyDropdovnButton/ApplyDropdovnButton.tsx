import './ApplyDropdovnButton.scss';
import { useSelector, useDispatch } from 'react-redux';
import { JoinUsPortallState } from '../../redux/Actions/BooleanActions';
import { RootState } from '../../redux/RootReducer';

function ApplyDropdovnButton({teamCategoryValue}: {teamCategoryValue: string}) {
    const dispatch = useDispatch();
    const joinUsPortallState = useSelector((state: RootState ) => state.getboolean.closeOpenJoinUs);
    console.log(teamCategoryValue)

    const getJoinUsPopUp = (e: any) => {
        e.stopPropagation()
        dispatch(JoinUsPortallState(!joinUsPortallState));
    }
    
    return ( 

        <button onClick={ (e) => getJoinUsPopUp(e)} className='apply-button'>Apply</button>
    );
}

export default ApplyDropdovnButton;
