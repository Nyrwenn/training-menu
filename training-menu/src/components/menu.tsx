import '../style/menu.scss';
import {Choice} from '../choices';
import {useDispatch, useSelector} from 'react-redux';
import {dishAction} from '../app/actions/dishAction';


type Props = {
    choice: Choice;
}

function Menu(props: Props){
    const {choice} = props;
    const dispatch = useDispatch();
    const menuState = useSelector((state:any)=>state.dishAction);
    
    const isChecked = (dish:string):boolean => {
       if(menuState[choice.bigTitle] === dish){
        return true
       }else{
        return false; 
       }
    }

    const handleTake = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(menuState[choice.bigTitle] === e.target.value){
           dispatch(dishAction(e.target.id, ""))
        }else{
            dispatch(dishAction(e.target.id, e.target.value));
        }
    }

    return <div className='menu_wrapper'>
    <h1 className="title">{choice.bigTitle}</h1>
    {choice.title.map((dish:string, i:number)=>(
        <div className='lil_container' key={i}>
        <p className='dishes' >{dish}</p>
        <input type="checkbox" id={choice.bigTitle} value={dish} onChange={(e) => handleTake(e)} checked={isChecked(dish)}/>
        </div>
    ))    
    }
    </div>
}

export default Menu;