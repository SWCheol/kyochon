import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import SidebarContents from "./SidebarContents";

const Sidebar = (props) => {
  const sidebarClassname = "max-w-sm w-full h-screen absolute top-0 left-0 ";
  const contentsClassname =
    "w-3/4 h-screen bg-white px-5 absolute top-0 duration-300 transition-[left] z-15 ";
  const shadowClassname =
    "w-1/4 h-screen bg-black absolute left-3/4 duration-300 transition-[opacity] ";

  const [sidebar, setSidebar] = useState(sidebarClassname + "-z-10");
  const [contents, setContents] = useState(contentsClassname + "-left-full");
  const [shadow, setShadow] = useState(shadowClassname + "opacity-0");

  const on = () => {
    setSidebar(sidebarClassname + "z-10");
    setContents(contentsClassname + "left-0");
    setShadow(shadowClassname + "opacity-60");
  };

  const off = () => {
    setSidebar(sidebarClassname + "-z-10");
    setContents(contentsClassname + "-left-full");
    setShadow(shadowClassname + "opacity-0");
  };

  useEffect(() => {
    if (props.active === "active") {
      on();
    } else {
      off();
    }
  }, [props.active]);

  return (
    <>
      <div id="sidebar" className={sidebar}>
        <div id="contents" className={contents}>
          <div
            id="top"
            className="h-12 flex justify-end items-center border-b border-solid border-gray-200"
          >
            <span className="material-symbols-outlined">person</span>
            <span className="material-symbols-outlined ml-3">
              notifications_active
            </span>
          </div>
          <div className="flex border-b border-solid pb-6 border-gray-200">
            <article
              id="deliveryOrder"
              className="bg-gray-200 rounded-xl m-3 w-2/5 p-3"
            >
              <div>
                <span className="material-symbols-outlined text-5xl">
                  motorcycle
                </span>
                <div>배달주문</div>
              </div>
            </article>
            <article
              id="takeOrder"
              className="bg-gray-200 rounded-xl m-3 w-2/5 p-3"
            >
              <div>
                <span className="material-symbols-outlined text-5xl">
                  local_mall
                </span>
                <div>포장주문</div>
              </div>
            </article>
          </div>
          <SidebarContents>
            <div className="flex items-center mb-2">
              <span className="material-symbols-outlined mr-3">
                radio_button_checked
              </span>
              포인트
            </div>
            <div className="flex items-center mb-2">
              <span className="material-symbols-outlined mr-3">
                local_activity
              </span>
              E-쿠폰
            </div>
          </SidebarContents>
          <SidebarContents>
            <Link className="flex items-center mb-2" to="/Menu">
              <span className="material-symbols-outlined mr-3">menu_book</span>
              메뉴소개
            </Link>
            <Link className="flex items-center mb-2" to="/Shop">
              <span className="material-symbols-outlined mr-3">storefront</span>
              매장찾기
            </Link>
            <Link className="flex items-center mb-2" to="/EventNow">
              <span className="material-symbols-outlined mr-3">campaign</span>
              이벤트
            </Link>
            <Link className="flex items-center mb-2" to="/BreakdownOut">
              <span className="material-symbols-outlined mr-3">fact_check</span>
              주문내역
            </Link>
          </SidebarContents>
          <SidebarContents>
            <div className="flex items-center mb-2">
              <span className="material-symbols-outlined mr-3">list_alt</span>
              공지사항
            </div>
            <div className="flex items-center mb-2">
              <span className="material-symbols-outlined mr-3">
                find_in_page
              </span>
              이용안내
            </div>
            <div className="flex items-center mb-2">
              <span className="material-symbols-outlined mr-3">settings</span>
              설정
            </div>
          </SidebarContents>
        </div>
        {/* <div id="shadow" className={shadow}></div> */}
      </div>
    </>
  );
};

export default Sidebar;
