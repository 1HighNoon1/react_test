import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog =(props) =>{
console.log(props);
    let path ="/dialogs/"+props.id;
    return(
    <div className={classes.dialog +' '+classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

export default Dialog