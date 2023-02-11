import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import WeatherList from "./pages/weatherList";
import { NavPages } from "./constants/NavPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={NavPages.home} element={<Home />} />
        <Route path={NavPages.waetherList} element={<WeatherList />} />
      </Routes>
    </Router>
  );
}

export default App;
