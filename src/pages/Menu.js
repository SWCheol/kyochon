import Header from "./components/Header";
import HeaderNav from "./components/HeaderNav";
import Content from "./components/Content";

import MenuList from "./components/MenuList";

import menu from "../menu.json";

const Menu = (props) => {
  const menuList = [
    "전체메뉴",
    "교촌",
    "블랙",
    "허니",
    "레드",
    "믹스",
    "후라이드",
    "스페셜",
  ];

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
      <HeaderNav menu={menuList} parent={Menu} />
      <Content>
        <div>
          {menu.menu.map((menu, index) => {
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
