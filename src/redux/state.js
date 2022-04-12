

let store={
    _state:{
        profilePage:{
            postsData:[
                {id:1,postText: 'Dima',likes:1},
                {id:2,postText: 'Sveta',likes:5},
                {id:3,postText: 'Vasya',likes:41},
                {id:4,postText: 'Rita',likes:4},
                {id:5,postText: 'Petya',likes:3},
                {id:6,postText: 'Igor',likes:2},
                {id:7,postText: 'Sasha',likes:4},
                {id:8,postText: 'Sasha',likes:4}
            ],
            newPostText:"Чебурек"
        },
        messagesPage:{
            MessagesData:[
                {id:1,message: 'Hello'},
                {id:2,message: 'How are u'},
                {id:3,message: 'Yop123ta'},
                {id:4,message: 'Hello'}
            ],
            dialogsData:[
                {id:1,name: 'Dima'},
                {id:2,name: 'Sveta'},
                {id:3,name: 'Vasya'},
                {id:4,name: 'Rita'},
                {id:5,name: 'Petya'},
                {id:6,name: 'Igor'},
                {id:7,name: 'Sasha'},
                {id:8,name: 'Sasha'},
                {id:9,name: 'Sasha'}
            ]
        }
    },
     _callSubscriber(){
        console.log('State changed');
     },
    getState() {
        return this._state
    },
    addPost(){

    },
    updateNewPostText(newText){

    },
    subscribe(observer){
        this._callSubscriber=observer;
    },
    dispatch(action){//type:'ADD-POST'
        if(action.type === 'ADD-POST'){
            let newPost={
                id:9,
                postText:this._state.profilePage.newPostText,
                likes:8
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText='';

            this._callSubscriber(this._state);
        }
        else if(action.type ==='UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText=action.newText;
            this._callSubscriber(this._state);
        }
    }
}





export default store;
window.store=store;