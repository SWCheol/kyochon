import Header from "./components/Header";
import Content from "./components/Content";

import TopMenu from "./components/TopMenu";

const ShopMap = () => {
  return (
    <>
      <Header />
      <nav className="flex justify-around h-12 items-center text-lg bg-white">
        <TopMenu link="/shop" title="매장 검색" />
        <TopMenu
          link="/shop/shopMap"
          title="내 주변 매장 찾기"
          select="text-orange-500"
        />
      </nav>
      <Content></Content>
    </>
  );
};

export default ShopMap;
