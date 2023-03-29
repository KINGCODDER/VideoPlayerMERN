import Home from "./Components/Home";
import "./App.css";
import LoginState from "./Context/LoginState";

function App() {
  return (
    <div className="App">
      <LoginState>
        <Home />
      </LoginState>
    </div>
  );
}

export default App;
