import React from 'react';
import '../src/style/menu.scss';
import Menu from '../src/components/menu';
import {choices} from '../src/choices';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


function App() {
 const dishAction = useSelector((state: any)=>state.dishAction);
 const navigate = useNavigate();

const keepData = () =>{
  navigate('/confirmation');
}

const disabledButton = ():boolean =>{
  let arrayDish = Object.values(dishAction);
  let empty:boolean = false;
  for(let i = 0; i<arrayDish.length; i++ ){
    if(arrayDish[i] !== ""){
      empty = true;
    }
  }
  if(arrayDish.length === 0 || (arrayDish.length > 0 && empty === false)){
    return true;
  }else{
    return false
  }
  
}

  return (
    <div className="app">
      {choices.map((choice, i:number) =>(
        <Menu key={i} choice={choice} />
        
      ))
          
      }

  <button className='button' disabled={disabledButton()} onClick={()=>keepData()}>Valider</button>
    
    </div>
  );
}

export default App;
