import Header from "./components/Header";
import HeaderNav from "./components/HeaderNav";
import Content from "./components/Content";

const Event = (props) => {
  const menu = ["진행 이벤트", "종료 이벤트"];

  return (
    <>
      <Header />
      <HeaderNav menu={menu} parent={Event} />
      <Content></Content>
    </>
  );
};

export default Event;
