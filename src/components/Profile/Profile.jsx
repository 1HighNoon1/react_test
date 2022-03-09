import classes from './Profile.module.css';
import MyPosts from "./My_posts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";



const Profile =(props) => {
    console.log(props);
    return (
        <div className={classes.content}>
            <Profileinfo />
             <MyPosts postsData={props.profilePageData.postsData}/>
        </div>
    );
}
export default Profile;