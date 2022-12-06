import {useSelector} from 'react-redux';
import MenuConfirm from '../components/menuConfirm';
import '../style/menu.scss';

function Confirmation(){
    const dishState = useSelector((state:any)=>state.dishAction);
    let dishKeys = Object.keys(dishState) as string[];
    let dishValue= Object.values(dishState) as string[];

return <div className="confirm_wrapper">
        {
            dishKeys.map((dishKey, i)=> (
            <MenuConfirm key={i} dishKey={dishKey} dishValue={dishValue[i]}/>
            ))
        }
   
</div>
}
export default Confirmation;