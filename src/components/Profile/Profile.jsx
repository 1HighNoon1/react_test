import classes from './Profile.module.css';
import MyPosts from "./My_posts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import {updateNewPostText} from "../../redux/state";



const Profile =(props) => {

    return (
        <div className={classes.content}>
            <Profileinfo />
             <MyPosts updateNewPostText={props.updateNewPostText} addPost={props.addPost} postsData={props.profilePageData.postsData} newPostText={props.profilePageData.newPostText}/>
        </div>
    );
}
export default Profile;