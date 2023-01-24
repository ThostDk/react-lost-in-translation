import './App.css';
import LoginPage from './views/Login'
import TranslationPage from './views/Translation';
import ProfilePage from './views/Profile';
import {useState} from "react"

function App() {
  const [response, setResponse] = useState("");
  
//{response === "" ?<LoginPage setResponse={setResponse} inputPlaceholder="What's your name?"/>:<TranslationPage profileName ={response}/>}
  
  const tmpName ="Thomas";
  return (
    <div className="App">
      <ProfilePage profileName ={tmpName}></ProfilePage>
    </div>
  );
}

export default App;
