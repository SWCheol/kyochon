import "./App.css";

import { Route, Routes } from "react-router-dom";

import Wrapper from "./pages/components/Wrapper";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MenuKyochon from "./pages/MenuKyochon";
import MenuBlack from "./pages/MenuBlack";
import MenuHoney from "./pages/MenuHoney";
import MenuRed from "./pages/MenuRed";
import Shop from "./pages/Shop";
import ShopList from "./pages/ShopList";
import ShopMap from "./pages/ShopMap";
import Event from "./pages/Event";
import EventNow from "./pages/EventNow";
import EventEnd from "./pages/EventEnd";
import Breakdown from "./pages/Breakdown";
import BreakdownOut from "./pages/BreakdownOut";
import BreakdownEcoupon from "./pages/BreakdownEcoupon";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/MenuKyochon" element={<MenuKyochon />} />
          <Route path="/MenuBlack" element={<MenuBlack />} />
          <Route path="/MenuHoney" element={<MenuHoney />} />
          <Route path="/MenuRed" element={<MenuRed />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Shop/ShopList" element={<ShopList />} />
          <Route path="/Shop/ShopMap" element={<ShopMap />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/EventNow" element={<EventNow />} />
          <Route path="/EventEnd" element={<EventEnd />} />
          <Route path="/Breakdown" element={<Breakdown />} />
          <Route path="/BreakdownOut" element={<BreakdownOut />} />
          <Route path="/BreakdownEcoupon" element={<BreakdownEcoupon />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
