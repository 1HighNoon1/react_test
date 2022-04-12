import classes from './MyPosts.module.css';
import MyPost from "./Posts/MyPost";
import React from "react";
import {addPostActionCreator, updateNewPostText, updateNewPostTextActionCreator} from "../../../redux/state";






const MyPosts =(props) => {



   let PostElement=props.postsData.map(postsData=><MyPost meassage={postsData.postText} LikeCount={postsData.likes}/>);

   let newPostElement = React.useRef()

   let addPost=()=>{

       props.dispatch(addPostActionCreator());
       newPostElement.current.value='';
   }

   let onPostChange=()=>{
       let text =newPostElement.current.value;
       props.dispatch(updateNewPostTextActionCreator(text));
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