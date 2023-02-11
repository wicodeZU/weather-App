import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import WearthList from "./pages/weatherList";
import { NavPages } from "./constants/NavPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={NavPages.home} element={<Home />} />
        <Route path={NavPages.waetherList} element={<WearthList />} />
      </Routes>
    </Router>
  );
}

export default App;
