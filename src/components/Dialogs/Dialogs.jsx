import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/DialogMessage";
import Dialog from "./dialogItem/DialogItem";


const Dialogs = (props) => {


    let MessagesElements = props.messagesPageData.MessagesData.map(message=> <Message message={message.message}  />);
    let dialogsElements = props.messagesPageData.dialogsData.map(dialog=> <Dialog name={dialog.name} id={dialog.id}/>);

  return  (
      <div className={classes.dialogs}>
        <div className={classes.dialogs_items}>{dialogsElements}</div>
        <div className={classes.messages}>{MessagesElements}</div>
      </div>
  )
}

export default Dialogs