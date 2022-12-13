import Header from "./components/Header";
import HeaderNav from "./components/HeaderNav";
import Content from "./components/Content";

const Breakdown = (props) => {
  const menu = ["배달/포장 주문", "E-쿠폰 주문"];

  return (
    <>
      <Header />
      <HeaderNav menu={menu} parent={Breakdown} />
      <Content>
        <div className="font-bold flex justify-center items-center flex-col relative top-1/4">
          <img src="img/orderList.png" className="w-1/2 mb-4" alt="주문내역이 없습니다." />
          <div>주문내역이 없습니다</div>
        </div>
      </Content>
    </>
  );
};

export default Breakdown;
