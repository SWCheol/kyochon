import "./App.css";

import { Route, Routes } from "react-router-dom";

import Wrapper from "./pages/components/Wrapper";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import Event from "./pages/Event";
import Breakdown from "./pages/Breakdown";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Breakdown" element={<Breakdown />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
