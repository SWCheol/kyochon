import Header from "./components/Header";
import HeaderNav from "./components/HeaderNav";
import Content from "./components/Content";

import MenuList from "./components/MenuList";

import image from "../image.json";

const Menu = (props) => {
  const menu = [
    "전체메뉴",
    "교촌",
    "블랙",
    "허니",
    "레드",
    "믹스",
    "후라이드",
    "스페셜",
  ];

  let style =
    menu.length < 5
      ? `basis-1/${menu.length} flex-none`
      : "basis-1/5 flex-none";

  const btnSelected = (e) => {
    const color = "text-orange-500";
  };

  return (
    <>
      <Header />
      {/* <nav className="h-12 px-2 flex bg-white overflow-hidden text-base">
        {menu.map((menu, index) => {
          return (
            <button className={style} key={index} onClick={btnSelected}>
              {menu}
            </button>
          );
        })}
      </nav> */}
      <HeaderNav menu={menu} parent={Menu} />
      <Content>
        <div>
          {image.menu.map((menu, index) => {
            return (
              <MenuList
                key={index}
                theme={menu.theme}
                src={menu.src}
                name={menu.name}
                price={menu.price}
              ></MenuList>
            );
          })}
        </div>
      </Content>
    </>
  );
};

export default Menu;
