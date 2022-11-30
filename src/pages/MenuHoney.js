import Header from "./components/Header";
import Content from "./components/Content";

import TopMenu from "./components/TopMenu";

import MenuList from "./components/MenuList";

import image from "../image.json";

const MenuHoney = () => {
  const img = image.menu.filter((ele) => ele.theme === "honey");
  return (
    <>
      <Header />
      <nav className="flex justify-around h-12 items-center text-base overflow-x-auto bg-white">
        <TopMenu link="/menu" title="전체메뉴" />
        <TopMenu link="/menuKyochon" title="교촌" />
        <TopMenu link="/menuBlack" title="교촌블랙" />
        <TopMenu link="/menuHoney" title="교촌허니" select="text-orange-500" />
        <TopMenu link="/menuRed" title="교촌레드" />
      </nav>
      <Content>
        <div className="">
          {img.map((menu, index) => {
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

export default MenuHoney;
