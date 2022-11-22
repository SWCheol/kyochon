import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/menu">메뉴소개</Link>
      <Link to="/shop">매장찾기</Link>
      <Link to="/event">이벤트</Link>
      <Link to="/breakdown">주문내역</Link>
    </footer>
  );
};

export default Footer;
