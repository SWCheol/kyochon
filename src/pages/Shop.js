import Header from "./components/Header";
import HeaderNav from "./components/HeaderNav";
import Content from "./components/Content";

const Shop = () => {
  const menu = ["매장 검색", "내 주변 매장 찾기"];
  return (
    <>
      <Header />
      <HeaderNav menu={menu}/>
      <Content>
        <form className="w-10/12 mx-auto relative border border-solid border-black rounded-xl mt-4 mb-2">
          <input
            className="text-lg"
            type="text"
            placeholder="매장명을 검색해주세요"
          />
          <span className="material-symbols-outlined absolute top-px"></span>
        </form>
      </Content>
    </>
  );
};

export default Shop;
