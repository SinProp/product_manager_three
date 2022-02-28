import './App.css';
import { Router } from "@reach/router";
import Main from './views/Main';
import ShowProduct from './components/ShowProduct';


// Rendering components through Main.Js in the views folder and reach router
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <ShowProduct path="/:_id" />
      </Router>
    </div>
  );
}

export default App;
