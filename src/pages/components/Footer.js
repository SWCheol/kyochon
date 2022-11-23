import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white h-20 flex relative">
      <Link className="w-1/4" to="/menu">
        <span class="material-symbols-outlined text-5xl">menu_book</span>
        <div className="text-xl">메뉴소개</div>
      </Link>

      <div className="absolute top-4 left-1/4 w-px h-12 bg-slate-300"></div>

      <Link className="w-1/4" to="/shop">
        <span class="material-symbols-outlined text-5xl">storefront</span>
        <div className="text-xl">매장찾기</div>
      </Link>

      <div className="absolute top-4 left-2/4 w-px h-12 bg-slate-300"></div>

      <Link className="w-1/4" to="/event">
        <span class="material-symbols-outlined text-5xl">campaign</span>
        <div className="text-xl">이벤트</div>
      </Link>

      <div className="absolute top-4 left-3/4 w-px h-12 bg-slate-300"></div>

      <Link className="w-1/4" to="/breakdown">
        <span class="material-symbols-outlined text-5xl">fact_check</span>
        <div className="text-xl">주문내역</div>
      </Link>
    </footer>
  );
};

export default Footer;
