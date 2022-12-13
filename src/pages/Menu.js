import { useState } from "react";

import Header from "./components/Header";
import HeaderNav from "./components/HeaderNav";
import Content from "./components/Content";

import MenuList from "./components/MenuList";

import menu from "../menu.json";

const Menu = (props) => {
  const menuList = ["전체메뉴", "교촌", "블랙", "허니", "레드", "믹스", "후라이드", "스페셜"];

  const [list, setList] = useState(() => {
    menu.menu.map((menu, index) => {
      return <MenuList key={index} theme={menu.theme} src={menu.src} name={menu.name} price={menu.price}></MenuList>;
    });
  });

  let changeList = () => {
    setList(() => {
      menu.menu.filter((menu) => {
        return menu === props;
      });
    });
  };

  return (
    <>
      <Header />
      <HeaderNav menu={menuList} parent={Menu} onClick={changeList} />
      <Content>
        <div>{list}</div>
      </Content>
    </>
  );
};

export default Menu;
