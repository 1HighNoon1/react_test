import classes from './MyPosts.module.css';
import MyPost from "./Posts/MyPost";
import React from "react";
import {updateNewPostText} from "../../../redux/state";


const MyPosts =(props) => {



   let PostElement=props.postsData.map(postsData=><MyPost meassage={postsData.postText} LikeCount={postsData.likes}/>);

   let newPostElement = React.useRef()

   let addPost=()=>{

       props.dispatch({type:'ADD-POST'});
       newPostElement.current.value='';
   }

   let onPostChange=()=>{
       props.dispatch({type:'UPDATE-NEW-POST-TEXT',
                        newText:newPostElement.current.value});
      // props.updateNewPostText(newPostElement.current.value);
   }


    return (
        <div calssName={classes.postsBlock}>
            <div>
                <div><textarea name="" onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
                <div><button onClick={addPost}>add post</button></div>
            </div>
            <div>
                {PostElement}

            </div>
        </div>
    );
}
export default MyPosts;