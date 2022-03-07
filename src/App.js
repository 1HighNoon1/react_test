
import style from './App.css';
import Header from "./components/Header/Header";
import Nav  from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props)=> {

  return (
<BrowserRouter>
      <div className="App-wrapp">

          <Header />
          <Nav />

          <div style={style.wrapper_content}>
              <Routes>
                  <Route path="/dialogs/*" element={<Dialogs MessagesData={props.MessagesData} dialogsData={props.dialogsData} />} />
                  <Route path="/profile/*" element={<Profile postsData={props.postsData}/>} />
              </Routes>

           </div>
      </div>
</BrowserRouter>
  );
}

export default App;

