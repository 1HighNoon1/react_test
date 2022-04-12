
import style from './App.css';
import Header from "./components/Header/Header";
import Nav  from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {updateNewPostText} from "./redux/state";


const App = (props)=> {
    console.log(props);

  return (
<BrowserRouter>
      <div className="App-wrapp">

          <Header />
          <Nav />

          <div style={style.wrapper_content}>
              <Routes>
                  <Route path="/dialogs/*" element={<Dialogs messagesPageData={props.state.messagesPage}/>} />
                  <Route path="/profile/*" element={<Profile dispatch={props.dispatch} profilePageData={props.state.profilePage}/>} />
              </Routes>

           </div>
      </div>
</BrowserRouter>
  );
}

export default App;

