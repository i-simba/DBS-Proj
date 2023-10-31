import Home from "./pages/Home";
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  return (
    <Router base="/">
      <Routes>
        <Route exact path ="/" element ={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
