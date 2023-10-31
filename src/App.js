import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Link to="/"/>
      <Routes>
        <Route exact path ="/" element ={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
