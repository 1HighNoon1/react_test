import classes from './MyPosts.module.css';
import MyPost from "./Posts/MyPost";
import React from "react";


const MyPosts =(props) => {


console.log(props);
   let PostElement=props.postsData.map(postsData=><MyPost meassage={postsData.postText} LikeCount={postsData.likes}/>);

   let newPostElement = React.useRef()

   let addPost=()=>{
       let text = newPostElement.current.value;
       props.addPost(text);
       newPostElement.current.value='';
   }

    return (
        <div calssName={classes.postsBlock}>
            <div>
                <div><textarea name="" ref={newPostElement} id="new-Post" cols="30" rows="10"></textarea></div>
                <div><button onClick={addPost}>add post</button></div>
            </div>
            <div>
                {PostElement}

            </div>
        </div>
    );
}
export default MyPosts;