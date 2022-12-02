import Header from "./components/Header";
import Content from "./components/Content";

import TopMenu from "./components/TopMenu";

const BreakdownEcoupon = () => {
  return (
    <>
      <Header />
      <nav className="flex justify-around h-12 items-center text-base bg-white">
        <TopMenu link="/breakdownOut" title="배달/포장 주문" />
        <TopMenu
          link="/breakdownEcoupon"
          title="E-쿠폰 주문"
          select="text-orange-500"
        />
      </nav>
      <Content></Content>
    </>
  );
};

export default BreakdownEcoupon;
