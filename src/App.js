import './App.css';
import LoginPage from './views/Login'
import TranslationPage from './views/Translation';
import {useState} from "react"

function App() {
  const [response, setResponse] = useState("");

  return (
    <div className="App">
      
      {response === "" ?<LoginPage setResponse={setResponse} inputPlaceholder="What's your name?"/>:<TranslationPage profileName ={response}/>}
  
    </div>
  );
}

export default App;
