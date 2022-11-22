import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="flex justify-between">
      {location.pathname === "/" ? (
        <div className="text-black">사이드바</div>
      ) : (
        <Link to="/">화살표</Link>
      )}
      <h1 className="font-extrabold tracking-widest">KYOCHON 1991</h1>
      <div>장바구니</div>
    </header>
  );
};

export default Header;
