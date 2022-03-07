import classes from './MyPosts.module.css';
import MyPost from "./Posts/MyPost";


const MyPosts =(props) => {



   let PostElement=props.postsData.map(postsData=><MyPost meassage={postsData.postText} LikeCount={props.postsData.likes}/>);


    return (
        <div calssName={classes.postsBlock}>
            <div>
                <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
                <div><button>add post</button></div>
            </div>
            <div>
                {PostElement}

            </div>
        </div>
    );
}
export default MyPosts;