import Header from "./components/Header";
import Content from "./components/Content";

import TopMenu from "./components/TopMenu";

const Shop = () => {
  return (
    <>
      <Header />
      <nav className="flex justify-around h-12 items-center text-lg bg-white">
        <TopMenu link="/shop" title="매장 검색" select="text-orange-500" />
        <TopMenu link="/shop/shopMap" title="내 주변 매장 찾기" />
      </nav>
      <Content>
        <form className="w-10/12 mx-auto relative border border-solid border-black rounded-xl mt-4 mb-2">
          <input
            className="text-lg"
            type="text"
            placeholder="매장명을 검색해주세요"
          />
          <span className="material-symbols-outlined absolute top-px">
            <TopMenu link="/shop/shopList" title="search" />
          </span>
        </form>
      </Content>
    </>
  );
};

export default Shop;
