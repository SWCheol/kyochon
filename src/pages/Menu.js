import Header from "./components/Header";
import Content from "./components/Content";

import TopMenu from "./components/TopMenu";

import MenuList from "./components/MenuList";

import image from "../image.json";

const Menu = () => {
  return (
    <>
      <Header />
      <nav className="flex justify-around h-12 items-center text-lg overflow-x-auto bg-white">
        <TopMenu link="/menu" title="전체메뉴" select="text-orange-500" />
        <TopMenu link="/menu" title="교촌" />
        <TopMenu link="/menu" title="교촌블랙" />
        <TopMenu link="/menu" title="교촌허니" />
        <TopMenu link="/menu" title="교촌레드" />
      </nav>
      <Content>
        <div className="">
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
