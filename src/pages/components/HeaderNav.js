const HeaderNav = (props) => {
  let style =
    props.menu.length < 5
      ? `basis-1/${props.menu.length} flex-none`
      : "basis-1/5 flex-none";

  console.log(props.parent);

  const btnSelected = (e) => {
    console.log(e.target.textContent);
    const color = "text-orange-500";
  };

  return (
    <nav className="h-12 px-2 flex bg-white overflow-hidden text-base">
      {props.menu.map((menu, index) => {
        return (
          <button className={style} key={index} onClick={btnSelected}>
            {menu}
          </button>
        );
      })}
    </nav>
  );
};

export default HeaderNav;
