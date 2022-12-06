import '../style/menu.scss';


type Props = {
    dishKey: string,
    dishValue: string,
}


function MenuConfirm(props: Props){
    const {dishKey, dishValue} = props;

    return <div className="mini_wrapper">
        <h1 className="title">{dishKey}</h1>
        <p className="dishes">{dishValue}</p>
    </div>
}

export default MenuConfirm;