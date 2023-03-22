import "./App.css";
import { BrowserRouter, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmperors } from "./redux/features/emperorsSlice";
import Header from "./components/Header/Header";
import Heading from "./components/Heading/Heading";
import Home from "./components/Home/Home";
import Dynasty from "./components/Dynasty/Dynasty";
import Emperor from "./components/Emperor/Emperor";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.emperors);

  useEffect(() => {
    dispatch(fetchEmperors());
  }, []);

  if (!state.emperorsArray) {
    return <h2>Loading...</h2>;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Heading />
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="dynasty/:name" element={<Dynasty />} />
        <Route path="emperor/:name" element={<Emperor />} />
        <Route path="*" element={<div>If page not found it goes here</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
