import classes from './Profile.module.css';
import MyPosts from "./My_posts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";



const Profile =() => {
    return (
        <div className={classes.content}>
            <Profileinfo />
             <MyPosts />
        </div>
    );
}
export default Profile;