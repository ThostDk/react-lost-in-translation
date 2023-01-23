import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/loginPage';
import {useState} from "react"

function App() {
  const [response, setResponse] = useState("");

  return (
    <div className="App">
      
      <LoginPage setResponse={setResponse} inputPlaceholder="What's your name?"></LoginPage>
    </div>
  );
}

export default App;
