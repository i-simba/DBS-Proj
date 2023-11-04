import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Person from "./pages/Person";
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
        <Route exact path ="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
        <Route path="/person/:id" element={<Person/>}/>
      </Routes>
    </Router>
  );
}

export default App;
