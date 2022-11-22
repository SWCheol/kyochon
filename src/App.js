import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import Event from "./pages/Event";
import Breakdown from "./pages/Breakdown";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/event" element={<Event />} />
        <Route path="/breakdown" element={<Breakdown />} />
      </Routes>
    </div>
  );
}

export default App;
