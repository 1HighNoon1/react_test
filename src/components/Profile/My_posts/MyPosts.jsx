import classes from './MyPosts.module.css';
import MyPost from "./Posts/MyPost";


const MyPosts =() => {

    let postsData=[
        {id:1,postText: 'Hello',likes:'0'},
        {id:1,postText: 'Hello',likes:'12'},
        {id:1,postText: 'Hello',likes:'10'},
        {id:1,postText: 'Hello',likes:'80'},
    ]


    return (
        <div calssName={classes.postsBlock}>
            <div>
                <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
                <div><button>add post</button></div>
            </div>
            <div>
                <MyPost meassage={postsData[0].postText} LikeCount={postsData[0].likes}/>
                <MyPost meassage={postsData[1].postText} LikeCount={postsData[1].likes}/>
                <MyPost meassage={postsData[2].postText} LikeCount={postsData[2].likes}/>
            </div>
        </div>
    );
}
export default MyPosts;