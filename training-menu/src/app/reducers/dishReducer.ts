export type DishState = {
    [key:string]: string
};

const dishState: DishState={};

export default function dishReducer(state = dishState, action: any){
    if(action.type==="dishAction"){
        return{
            ...state,
            [action.payload.id]: action.payload.value,
        };
    }else{
        return state;
    }
}