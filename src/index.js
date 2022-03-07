import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let postsData=[
    {id:1,postText: 'Hello',likes:'0'},
    {id:1,postText: 'Hello',likes:'12'},
    {id:1,postText: 'Hello',likes:'10'},
    {id:1,postText: 'Hello',likes:'80'},
]

let dialogsData=[
    {id:1,name: 'Dima'},
    {id:2,name: 'Sveta'},
    {id:3,name: 'Vasya'},
    {id:4,name: 'Rita'},
    {id:5,name: 'Petya'},
    {id:6,name: 'Igor'},
    {id:7,name: 'Sasha'},

]
let MessagesData=[
    {id:1,message: 'Hello'},
    {id:2,message: 'How are u'},
    {id:3,message: 'Yop123ta'},
    {id:4,message: 'Hello'}
]

ReactDOM.render(

  <React.StrictMode>

    <App postsData={postsData} dialogsData={dialogsData} MessagesData={MessagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
