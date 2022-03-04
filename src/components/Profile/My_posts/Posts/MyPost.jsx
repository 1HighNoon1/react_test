import classes from './MyPost.module.css';



const MyPost =(props) => {
    return (
                <div className={classes.item}>
                    <img src="https://vraki.net/sites/default/files/inline/images/1_6.png" alt="аватарка пользователя"/>
                    {props.meassage} <br/>
                    <span>like</span> {props.LikeCount}
                </div>

    );
}
export default MyPost;