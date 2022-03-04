import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog =(props) =>{
    let path ="/dialogs/"+props.id;
    return(
    <div className={classes.dialog +' '+classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

const Message=(props) =>{
    return(
        <div className={classes.message}>{props.message}</div>

    )
}


const Dialogs = () => {
    let dialogsData=[
        {id:1,name: 'Dima'},
        {id:2,name: 'Sveta'},
        {id:3,name: 'Vasya'},
        {id:4,name: 'Rita'},
        {id:5,name: 'Petya'},
        {id:6,name: 'Igor'},
        {id:7,name: 'Sasha'},

    ]

    let MessagesData=[
        {id:1,message: 'Hello'},
        {id:2,message: 'How are u'},
        {id:3,message: 'Yop123ta'},
        {id:4,message: 'Hello'}
    ]


  return  (
      <div className={classes.dialogs}>
        <div className={classes.dialogs_items}>

            <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
            <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
            <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
            <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
        </div>
        <div className={classes.messages}>
            <Message message={MessagesData[0].message}/>
            <Message message={MessagesData[1].message}/>
            <Message message={MessagesData[2].message}/>
            <Message message={MessagesData[3].message}/>
        </div>
      </div>
  )
}

export default Dialogs