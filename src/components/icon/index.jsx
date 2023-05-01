import './index.scss';
function Icon(props){
    return (
        <img  className="icon" size="small" color="black" src={`/assets/icons/${props.iconName}.svg`}/>
    )
}

export default Icon;